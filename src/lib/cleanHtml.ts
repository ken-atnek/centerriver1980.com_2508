export const convertFontToSpan = (html: string, baseFontSize: number = 16): string => {
  // より柔軟な font タグのパターンマッチング
  return html.replace(
    /<font\s+([^>]*?)>([\s\S]*?)<\/font>/gi,
    (match, attributes, content) => {
      const styles: string[] = [];
      
      // color属性を抽出 (hex、rgb、rgba形式対応)
      const colorMatch = attributes.match(/color\s*=\s*['"]?(#[0-9a-fA-F]{3,6}|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\))['"]?/i);
      if (colorMatch) {
        styles.push(`color: ${colorMatch[1]}`);
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
