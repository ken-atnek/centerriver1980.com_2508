export const convertFontToSpan = (html: string, baseFontSize: number = 16): string => {
  // より柔軟な font タグのパターンマッチング
  return html.replace(
    /<font\s+([^>]*?)>([\s\S]*?)<\/font>/gi,
    (match, attributes, content) => {
      const styles: string[] = [];

      const normalizeColorValue = (value: string): string | null => {
        const trimmed = value.trim();
        const isSupported = /^(#[0-9a-fA-F]{3,8}|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\))$/.test(trimmed);
        return isSupported ? trimmed : null;
      };

      const normalizeFontWeightValue = (value: string): string | null => {
        const trimmed = value.trim().toLowerCase();
        const keywordMatch = /^(normal|bold|bolder|lighter|initial|inherit|unset|revert)$/.test(trimmed);
        if (keywordMatch) return trimmed;

        const numericMatch = trimmed.match(/^([1-9]00)$/);
        if (numericMatch) return numericMatch[1];

        return null;
      };

      const extractColor = (attrText: string): string | null => {
        // style="..." の color: を優先（font color= よりも上書きされる想定）
        const styleAttrMatch = attrText.match(/style\s*=\s*(['"])([\s\S]*?)\1/i);
        if (styleAttrMatch) {
          const styleText = styleAttrMatch[2];
          const colorInStyleMatch = styleText.match(/(?:^|;)\s*color\s*:\s*([^;]+)\s*(?:;|$)/i);
          if (colorInStyleMatch) {
            const normalized = normalizeColorValue(colorInStyleMatch[1]);
            if (normalized) return normalized;
          }
        }

        // color="..." / color='...' / color=#xxxxxx
        const colorAttrMatch = attrText.match(/(?:^|\s)color\s*=\s*(?:(['"])([\s\S]*?)\1|([^\s>]+))/i);
        if (colorAttrMatch) {
          const raw = (colorAttrMatch[2] ?? colorAttrMatch[3] ?? '').trim();
          const normalized = normalizeColorValue(raw);
          if (normalized) return normalized;
        }
        return null;
      };
      const extractedColor = extractColor(attributes);
      if (extractedColor) {
        styles.push(`color: ${extractedColor}`);
      }

      const extractFontWeight = (attrText: string): string | null => {
        const styleAttrMatch = attrText.match(/style\s*=\s*(['"])([\s\S]*?)\1/i);
        if (styleAttrMatch) {
          const styleText = styleAttrMatch[2];
          const fontWeightInStyleMatch = styleText.match(/(?:^|;)\s*font-weight\s*:\s*([^;]+)\s*(?:;|$)/i);
          if (fontWeightInStyleMatch) {
            const normalized = normalizeFontWeightValue(fontWeightInStyleMatch[1]);
            if (normalized) return normalized;
          }
        }

        const fontWeightAttrMatch = attrText.match(/(?:^|\s)font-weight\s*=\s*(?:(['"])([\s\S]*?)\1|([^\s>]+))/i);
        if (fontWeightAttrMatch) {
          const raw = (fontWeightAttrMatch[2] ?? fontWeightAttrMatch[3] ?? '').trim();
          const normalized = normalizeFontWeightValue(raw);
          if (normalized) return normalized;
        }

        return null;
      };

      const extractedFontWeight = extractFontWeight(attributes);
      if (extractedFontWeight) {
        styles.push(`font-weight: ${extractedFontWeight}`);
      }

      // size属性を抽出してフォントサイズに変換
      const sizeMatch = attributes.match(/size\s*=\s*['"]?(\d+)['"]?/i);
      let fontSize = baseFontSize;
      if (sizeMatch) {
        const size = parseInt(sizeMatch[1]);
        // HTMLのsize属性（1-7）をピクセルサイズに変換
        const sizeMap: { [key: number]: number } = {
          1: baseFontSize * 0.6,   // 9.6px (base 16px時)
          2: baseFontSize * 0.75,  // 12px
          3: baseFontSize * 1,     // 16px (標準)
          4: baseFontSize * 1.2,   // 19.2px
          5: baseFontSize * 1.5,   // 24px
          6: baseFontSize * 2,     // 32px
          7: baseFontSize * 3      // 48px
        };
        fontSize = sizeMap[size] || baseFontSize;
      }
      styles.push(`font-size: ${fontSize}px`);
      
      return `<span style="${styles.join('; ')}">${content}</span>`;
    }
  );
};
