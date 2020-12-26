const tintColorLight = '#285ECD';
const tintColorDark = '#fff';

// FUNDO DO ÍCONE DO BANNER -> ABD8FF
// FONTE DO BANNER -> 1F2C3A
// FUNDOS DE TODAS AS TELAS -> FFFFFF
// BORDA -># EBF2F6
// TEXTO DE BOTÕES DO PROTOCOLO -> 0287FA
// DEGRADE HOME -> 3D3AAA 285ECD

export default {
  light: {
    text: '#000',
    background: '#FEFEFE',
    bannerBackground: '#DBEFFF',
    bannerText: '#1F2C3A',
    borderButton: '#EBF2F6',
    buttonText: '#0287FA',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
