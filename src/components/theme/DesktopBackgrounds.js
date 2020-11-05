import lakeSunset from 'assets/images/bg/nature_lake_sunset.png';
import lakeSunsetMobile from 'assets/images/bg/nature_lake_sunset_mobile.png';

export const BACKGROUND_TYPE = {
    image: 'IMAGE',
    gradient: 'GRADIENT'
};

export const backgrounds = [
    {
        id: 'bg0',
        type: BACKGROUND_TYPE.image,
        name: 'Lake Sunset',
        isSelected: true,
        bg: {
            desktop: `url(${lakeSunset})`,
            mobile: `url(${lakeSunsetMobile})`
        }
    },
    {
        id: 'bg1',
        name: 'Backgorund 1',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(316deg, rgba(234, 234, 234, 0.02) 0%, rgba(234, 234, 234, 0.02) 16.667%,rgba(128, 128, 128, 0.02) 16.667%, rgba(128, 128, 128, 0.02) 33.334%,rgba(161, 161, 161, 0.02) 33.334%, rgba(161, 161, 161, 0.02) 50.001000000000005%,rgba(154, 154, 154, 0.02) 50.001%, rgba(154, 154, 154, 0.02) 66.668%,rgba(77, 77, 77, 0.02) 66.668%, rgba(77, 77, 77, 0.02) 83.33500000000001%,rgba(10, 10, 10, 0.02) 83.335%, rgba(10, 10, 10, 0.02) 100.002%),linear-gradient(75deg, rgba(39, 39, 39, 0.03) 0%, rgba(39, 39, 39, 0.03) 20%,rgba(232, 232, 232, 0.03) 20%, rgba(232, 232, 232, 0.03) 40%,rgba(33, 33, 33, 0.03) 40%, rgba(33, 33, 33, 0.03) 60%,rgba(84, 84, 84, 0.03) 60%, rgba(84, 84, 84, 0.03) 80%,rgba(112, 112, 112, 0.03) 80%, rgba(112, 112, 112, 0.03) 100%),linear-gradient(103deg, rgba(174, 174, 174, 0.03) 0%, rgba(174, 174, 174, 0.03) 12.5%,rgba(190, 190, 190, 0.03) 12.5%, rgba(190, 190, 190, 0.03) 25%,rgba(191, 191, 191, 0.03) 25%, rgba(191, 191, 191, 0.03) 37.5%,rgba(23, 23, 23, 0.03) 37.5%, rgba(23, 23, 23, 0.03) 50%,rgba(227, 227, 227, 0.03) 50%, rgba(227, 227, 227, 0.03) 62.5%,rgba(71, 71, 71, 0.03) 62.5%, rgba(71, 71, 71, 0.03) 75%,rgba(162, 162, 162, 0.03) 75%, rgba(162, 162, 162, 0.03) 87.5%,rgba(85, 85, 85, 0.03) 87.5%, rgba(85, 85, 85, 0.03) 100%),linear-gradient(355deg, rgba(38, 38, 38, 0.02) 0%, rgba(38, 38, 38, 0.02) 25%,rgba(106, 106, 106, 0.02) 25%, rgba(106, 106, 106, 0.02) 50%,rgba(28, 28, 28, 0.02) 50%, rgba(28, 28, 28, 0.02) 75%,rgba(66, 66, 66, 0.02) 75%, rgba(66, 66, 66, 0.02) 100%),linear-gradient(137deg, rgba(38, 38, 38, 0.03) 0%, rgba(38, 38, 38, 0.03) 25%,rgba(211, 211, 211, 0.03) 25%, rgba(211, 211, 211, 0.03) 50%,rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%,rgba(24, 24, 24, 0.03) 75%, rgba(24, 24, 24, 0.03) 100%),linear-gradient(51deg, rgba(253, 253, 253, 0.03) 0%, rgba(253, 253, 253, 0.03) 14.286%,rgba(103, 103, 103, 0.03) 14.286%, rgba(103, 103, 103, 0.03) 28.572%,rgba(46, 46, 46, 0.03) 28.572%, rgba(46, 46, 46, 0.03) 42.858%,rgba(68, 68, 68, 0.03) 42.858%, rgba(68, 68, 68, 0.03) 57.144%,rgba(116, 116, 116, 0.03) 57.144%, rgba(116, 116, 116, 0.03) 71.42999999999999%,rgba(248, 248, 248, 0.03) 71.43%, rgba(248, 248, 248, 0.03) 85.71600000000001%,rgba(174, 174, 174, 0.03) 85.716%, rgba(174, 174, 174, 0.03) 100.002%),linear-gradient(283deg, rgba(20, 20, 20, 0.01) 0%, rgba(20, 20, 20, 0.01) 14.286%,rgba(23, 23, 23, 0.01) 14.286%, rgba(23, 23, 23, 0.01) 28.572%,rgba(19, 19, 19, 0.01) 28.572%, rgba(19, 19, 19, 0.01) 42.858%,rgba(134, 134, 134, 0.01) 42.858%, rgba(134, 134, 134, 0.01) 57.144%,rgba(4, 4, 4, 0.01) 57.144%, rgba(4, 4, 4, 0.01) 71.42999999999999%,rgba(254, 254, 254, 0.01) 71.43%, rgba(254, 254, 254, 0.01) 85.71600000000001%,rgba(87, 87, 87, 0.01) 85.716%, rgba(87, 87, 87, 0.01) 100.002%),linear-gradient(90deg, rgb(168, 1, 206),rgb(20, 120, 203))'
    },
    {
        id: 'bg2',
        name: 'Backgorund 2',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(323deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 16.667%,rgba(46, 46, 46, 0.01) 16.667%, rgba(46, 46, 46, 0.01) 33.334%,rgba(226, 226, 226, 0.01) 33.334%, rgba(226, 226, 226, 0.01) 50.001000000000005%,rgba(159, 159, 159, 0.01) 50.001%, rgba(159, 159, 159, 0.01) 66.668%,rgba(149, 149, 149, 0.01) 66.668%, rgba(149, 149, 149, 0.01) 83.33500000000001%,rgba(43, 43, 43, 0.01) 83.335%, rgba(43, 43, 43, 0.01) 100.002%),linear-gradient(346deg, rgba(166, 166, 166, 0.03) 0%, rgba(166, 166, 166, 0.03) 25%,rgba(240, 240, 240, 0.03) 25%, rgba(240, 240, 240, 0.03) 50%,rgba(121, 121, 121, 0.03) 50%, rgba(121, 121, 121, 0.03) 75%,rgba(40, 40, 40, 0.03) 75%, rgba(40, 40, 40, 0.03) 100%),linear-gradient(347deg, rgba(209, 209, 209, 0.01) 0%, rgba(209, 209, 209, 0.01) 25%,rgba(22, 22, 22, 0.01) 25%, rgba(22, 22, 22, 0.01) 50%,rgba(125, 125, 125, 0.01) 50%, rgba(125, 125, 125, 0.01) 75%,rgba(205, 205, 205, 0.01) 75%, rgba(205, 205, 205, 0.01) 100%),linear-gradient(84deg, rgba(195, 195, 195, 0.01) 0%, rgba(195, 195, 195, 0.01) 14.286%,rgba(64, 64, 64, 0.01) 14.286%, rgba(64, 64, 64, 0.01) 28.572%,rgba(67, 67, 67, 0.01) 28.572%, rgba(67, 67, 67, 0.01) 42.858%,rgba(214, 214, 214, 0.01) 42.858%, rgba(214, 214, 214, 0.01) 57.144%,rgba(45, 45, 45, 0.01) 57.144%, rgba(45, 45, 45, 0.01) 71.42999999999999%,rgba(47, 47, 47, 0.01) 71.43%, rgba(47, 47, 47, 0.01) 85.71600000000001%,rgba(172, 172, 172, 0.01) 85.716%, rgba(172, 172, 172, 0.01) 100.002%),linear-gradient(73deg, rgba(111, 111, 111, 0.03) 0%, rgba(111, 111, 111, 0.03) 16.667%,rgba(202, 202, 202, 0.03) 16.667%, rgba(202, 202, 202, 0.03) 33.334%,rgba(57, 57, 57, 0.03) 33.334%, rgba(57, 57, 57, 0.03) 50.001000000000005%,rgba(197, 197, 197, 0.03) 50.001%, rgba(197, 197, 197, 0.03) 66.668%,rgba(97, 97, 97, 0.03) 66.668%, rgba(97, 97, 97, 0.03) 83.33500000000001%,rgba(56, 56, 56, 0.03) 83.335%, rgba(56, 56, 56, 0.03) 100.002%),linear-gradient(132deg, rgba(88, 88, 88, 0.03) 0%, rgba(88, 88, 88, 0.03) 20%,rgba(249, 249, 249, 0.03) 20%, rgba(249, 249, 249, 0.03) 40%,rgba(2, 2, 2, 0.03) 40%, rgba(2, 2, 2, 0.03) 60%,rgba(185, 185, 185, 0.03) 60%, rgba(185, 185, 185, 0.03) 80%,rgba(196, 196, 196, 0.03) 80%, rgba(196, 196, 196, 0.03) 100%),linear-gradient(142deg, rgba(160, 160, 160, 0.03) 0%, rgba(160, 160, 160, 0.03) 12.5%,rgba(204, 204, 204, 0.03) 12.5%, rgba(204, 204, 204, 0.03) 25%,rgba(108, 108, 108, 0.03) 25%, rgba(108, 108, 108, 0.03) 37.5%,rgba(191, 191, 191, 0.03) 37.5%, rgba(191, 191, 191, 0.03) 50%,rgba(231, 231, 231, 0.03) 50%, rgba(231, 231, 231, 0.03) 62.5%,rgba(70, 70, 70, 0.03) 62.5%, rgba(70, 70, 70, 0.03) 75%,rgba(166, 166, 166, 0.03) 75%, rgba(166, 166, 166, 0.03) 87.5%,rgba(199, 199, 199, 0.03) 87.5%, rgba(199, 199, 199, 0.03) 100%),linear-gradient(238deg, rgba(116, 116, 116, 0.02) 0%, rgba(116, 116, 116, 0.02) 20%,rgba(141, 141, 141, 0.02) 20%, rgba(141, 141, 141, 0.02) 40%,rgba(152, 152, 152, 0.02) 40%, rgba(152, 152, 152, 0.02) 60%,rgba(61, 61, 61, 0.02) 60%, rgba(61, 61, 61, 0.02) 80%,rgba(139, 139, 139, 0.02) 80%, rgba(139, 139, 139, 0.02) 100%),linear-gradient(188deg, rgba(227, 227, 227, 0.01) 0%, rgba(227, 227, 227, 0.01) 20%,rgba(105, 105, 105, 0.01) 20%, rgba(105, 105, 105, 0.01) 40%,rgba(72, 72, 72, 0.01) 40%, rgba(72, 72, 72, 0.01) 60%,rgba(33, 33, 33, 0.01) 60%, rgba(33, 33, 33, 0.01) 80%,rgba(57, 57, 57, 0.01) 80%, rgba(57, 57, 57, 0.01) 100%),linear-gradient(90deg, hsl(237,0%,13%),hsl(237,0%,13%))'
    },
    {
        id: 'bg3',
        name: 'Backgorund 3',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(292deg, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 20%,rgba(151, 151, 151, 0.03) 20%, rgba(151, 151, 151, 0.03) 40%,rgba(215, 215, 215, 0.03) 40%, rgba(215, 215, 215, 0.03) 60%,rgba(254, 254, 254, 0.03) 60%, rgba(254, 254, 254, 0.03) 80%,rgba(112, 112, 112, 0.03) 80%, rgba(112, 112, 112, 0.03) 100%),linear-gradient(62deg, rgba(34, 34, 34, 0.03) 0%, rgba(34, 34, 34, 0.03) 20%,rgba(171, 171, 171, 0.03) 20%, rgba(171, 171, 171, 0.03) 40%,rgba(206, 206, 206, 0.03) 40%, rgba(206, 206, 206, 0.03) 60%,rgba(210, 210, 210, 0.03) 60%, rgba(210, 210, 210, 0.03) 80%,rgba(69, 69, 69, 0.03) 80%, rgba(69, 69, 69, 0.03) 100%),linear-gradient(314deg, rgba(235, 235, 235, 0.03) 0%, rgba(235, 235, 235, 0.03) 20%,rgba(254, 254, 254, 0.03) 20%, rgba(254, 254, 254, 0.03) 40%,rgba(178, 178, 178, 0.03) 40%, rgba(178, 178, 178, 0.03) 60%,rgba(211, 211, 211, 0.03) 60%, rgba(211, 211, 211, 0.03) 80%,rgba(73, 73, 73, 0.03) 80%, rgba(73, 73, 73, 0.03) 100%),linear-gradient(32deg, rgba(182, 182, 182, 0.01) 0%, rgba(182, 182, 182, 0.01) 12.5%,rgba(208, 208, 208, 0.01) 12.5%, rgba(208, 208, 208, 0.01) 25%,rgba(178, 178, 178, 0.01) 25%, rgba(178, 178, 178, 0.01) 37.5%,rgba(143, 143, 143, 0.01) 37.5%, rgba(143, 143, 143, 0.01) 50%,rgba(211, 211, 211, 0.01) 50%, rgba(211, 211, 211, 0.01) 62.5%,rgba(92, 92, 92, 0.01) 62.5%, rgba(92, 92, 92, 0.01) 75%,rgba(56, 56, 56, 0.01) 75%, rgba(56, 56, 56, 0.01) 87.5%,rgba(253, 253, 253, 0.01) 87.5%, rgba(253, 253, 253, 0.01) 100%),linear-gradient(247deg, rgba(103, 103, 103, 0.02) 0%, rgba(103, 103, 103, 0.02) 12.5%,rgba(240, 240, 240, 0.02) 12.5%, rgba(240, 240, 240, 0.02) 25%,rgba(18, 18, 18, 0.02) 25%, rgba(18, 18, 18, 0.02) 37.5%,rgba(38, 38, 38, 0.02) 37.5%, rgba(38, 38, 38, 0.02) 50%,rgba(246, 246, 246, 0.02) 50%, rgba(246, 246, 246, 0.02) 62.5%,rgba(9, 9, 9, 0.02) 62.5%, rgba(9, 9, 9, 0.02) 75%,rgba(167, 167, 167, 0.02) 75%, rgba(167, 167, 167, 0.02) 87.5%,rgba(86, 86, 86, 0.02) 87.5%, rgba(86, 86, 86, 0.02) 100%),linear-gradient(90deg, hsl(194,0%,10%),hsl(194,0%,10%))'
    },
    {
        id: 'bg4',
        name: 'Backgorund 4',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(52deg, rgba(163, 163, 163, 0.09) 0%, rgba(163, 163, 163, 0.09) 33.3%,rgba(100, 100, 100, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 66.6%,rgba(162, 162, 162, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 99%),linear-gradient(258deg, rgba(193, 193, 193, 0.06) 0%, rgba(193, 193, 193, 0.06) 33.3%,rgba(169, 169, 169, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 66.6%,rgba(92, 92, 92, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 99%),linear-gradient(129deg, rgba(45, 45, 45, 0.03) 0%, rgba(45, 45, 45, 0.03) 33.3%,rgba(223, 223, 223, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 66.6%,rgba(173, 173, 173, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 99%),linear-gradient(280deg, rgba(226, 226, 226, 0.06) 0%, rgba(226, 226, 226, 0.06) 33.3%,rgba(81, 81, 81, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 66.6%,rgba(186, 186, 186, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 99%),linear-gradient(85deg, rgba(225, 225, 225, 0.04) 0%, rgba(225, 225, 225, 0.04) 33.3%,rgba(95, 95, 95, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 66.6%,rgba(39, 39, 39, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 99%),linear-gradient(128deg, rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 33.3%,rgba(0, 0, 0, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 66.6%,rgba(140, 140, 140, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 99.89999999999999%),linear-gradient(323deg, rgba(40, 40, 40, 0.07) 0%, rgba(40, 40, 40, 0.07) 33.3%,rgba(214, 214, 214, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 66.6%,rgba(190, 190, 190, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 99.89999999999999%),linear-gradient(61deg, rgba(230, 230, 230, 0) 0%, rgba(230, 230, 230, 0) 33.3%,rgba(241, 241, 241, 0) 33.3%, rgba(241, 241, 241, 0) 66.6%,rgba(55, 55, 55, 0) 66.6%, rgba(55, 55, 55, 0) 99%),linear-gradient(0deg, #2625e3,#0bbaef)'
    },
    {
        id: 'bg5',
        name: 'Backgorund 5',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(135deg, rgba(76, 76, 76, 0.04) 0%, rgba(76, 76, 76, 0.04) 10%,rgba(149, 149, 149, 0.04) 10%, rgba(149, 149, 149, 0.04) 100%),linear-gradient(90deg, rgba(196, 196, 196, 0.04) 0%, rgba(196, 196, 196, 0.04) 59%,rgba(68, 68, 68, 0.04) 59%, rgba(68, 68, 68, 0.04) 100%),linear-gradient(45deg, rgba(39, 39, 39, 0.01) 0%, rgba(39, 39, 39, 0.01) 9%,rgba(218, 218, 218, 0.01) 9%, rgba(218, 218, 218, 0.01) 100%),linear-gradient(0deg, rgba(26, 26, 26, 0.04) 0%, rgba(26, 26, 26, 0.04) 33%,rgba(90, 90, 90, 0.04) 33%, rgba(90, 90, 90, 0.04) 100%),linear-gradient(135deg, rgba(37, 37, 37, 0.07) 0%, rgba(37, 37, 37, 0.07) 46%,rgba(50, 50, 50, 0.07) 46%, rgba(50, 50, 50, 0.07) 100%),linear-gradient(90deg, rgb(8, 28, 65),rgb(16, 173, 226))'
    },
    {
        id: 'bg6',
        name: 'Backgorund 6',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.11) 0px, rgba(0, 0, 0, 0.11) 12px, rgba(1, 1, 1, 0.16) 12px, rgba(1, 1, 1, 0.16) 24px, rgba(0, 0, 0, 0.14) 24px, rgba(0, 0, 0, 0.14) 36px, rgba(0, 0, 0, 0.23) 36px, rgba(0, 0, 0, 0.23) 48px, rgba(0, 0, 0, 0.12) 48px, rgba(0, 0, 0, 0.12) 60px, rgba(1, 1, 1, 0.07) 60px, rgba(1, 1, 1, 0.07) 72px, rgba(0, 0, 0, 0.21) 72px, rgba(0, 0, 0, 0.21) 84px, rgba(0, 0, 0, 0.24) 84px, rgba(0, 0, 0, 0.24) 96px, rgba(1, 1, 1, 0.23) 96px, rgba(1, 1, 1, 0.23) 108px, rgba(1, 1, 1, 0.07) 108px, rgba(1, 1, 1, 0.07) 120px, rgba(0, 0, 0, 0.01) 120px, rgba(0, 0, 0, 0.01) 132px, rgba(1, 1, 1, 0.22) 132px, rgba(1, 1, 1, 0.22) 144px, rgba(1, 1, 1, 0.24) 144px, rgba(1, 1, 1, 0.24) 156px, rgba(0, 0, 0, 0) 156px, rgba(0, 0, 0, 0) 168px, rgba(0, 0, 0, 0.12) 168px, rgba(0, 0, 0, 0.12) 180px), repeating-linear-gradient(90deg, rgba(1, 1, 1, 0.01) 0px, rgba(1, 1, 1, 0.01) 12px, rgba(1, 1, 1, 0.15) 12px, rgba(1, 1, 1, 0.15) 24px, rgba(0, 0, 0, 0.09) 24px, rgba(0, 0, 0, 0.09) 36px, rgba(0, 0, 0, 0.02) 36px, rgba(0, 0, 0, 0.02) 48px, rgba(0, 0, 0, 0.1) 48px, rgba(0, 0, 0, 0.1) 60px, rgba(1, 1, 1, 0.07) 60px, rgba(1, 1, 1, 0.07) 72px, rgba(1, 1, 1, 0.15) 72px, rgba(1, 1, 1, 0.15) 84px, rgba(0, 0, 0, 0.18) 84px, rgba(0, 0, 0, 0.18) 96px, rgba(1, 1, 1, 0.15) 96px, rgba(1, 1, 1, 0.15) 108px, rgba(1, 1, 1, 0.09) 108px, rgba(1, 1, 1, 0.09) 120px, rgba(1, 1, 1, 0.07) 120px, rgba(1, 1, 1, 0.07) 132px, rgba(1, 1, 1, 0.05) 132px, rgba(1, 1, 1, 0.05) 144px, rgba(0, 0, 0, 0.1) 144px, rgba(0, 0, 0, 0.1) 156px, rgba(1, 1, 1, 0.18) 156px, rgba(1, 1, 1, 0.18) 168px), repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.24) 0px, rgba(0, 0, 0, 0.24) 16px, rgba(1, 1, 1, 0.06) 16px, rgba(1, 1, 1, 0.06) 32px, rgba(0, 0, 0, 0.16) 32px, rgba(0, 0, 0, 0.16) 48px, rgba(1, 1, 1, 0) 48px, rgba(1, 1, 1, 0) 64px, rgba(1, 1, 1, 0.12) 64px, rgba(1, 1, 1, 0.12) 80px, rgba(1, 1, 1, 0.22) 80px, rgba(1, 1, 1, 0.22) 96px, rgba(0, 0, 0, 0.24) 96px, rgba(0, 0, 0, 0.24) 112px, rgba(0, 0, 0, 0.25) 112px, rgba(0, 0, 0, 0.25) 128px, rgba(1, 1, 1, 0.12) 128px, rgba(1, 1, 1, 0.12) 144px, rgba(0, 0, 0, 0.18) 144px, rgba(0, 0, 0, 0.18) 160px, rgba(1, 1, 1, 0.03) 160px, rgba(1, 1, 1, 0.03) 176px, rgba(1, 1, 1, 0.1) 176px, rgba(1, 1, 1, 0.1) 192px), repeating-linear-gradient(135deg, rgba(1, 1, 1, 0.18) 0px, rgba(1, 1, 1, 0.18) 3px, rgba(0, 0, 0, 0.09) 3px, rgba(0, 0, 0, 0.09) 6px, rgba(0, 0, 0, 0.08) 6px, rgba(0, 0, 0, 0.08) 9px, rgba(1, 1, 1, 0.05) 9px, rgba(1, 1, 1, 0.05) 12px, rgba(0, 0, 0, 0.01) 12px, rgba(0, 0, 0, 0.01) 15px, rgba(1, 1, 1, 0.12) 15px, rgba(1, 1, 1, 0.12) 18px, rgba(0, 0, 0, 0.05) 18px, rgba(0, 0, 0, 0.05) 21px, rgba(1, 1, 1, 0.16) 21px, rgba(1, 1, 1, 0.16) 24px, rgba(1, 1, 1, 0.07) 24px, rgba(1, 1, 1, 0.07) 27px, rgba(1, 1, 1, 0.23) 27px, rgba(1, 1, 1, 0.23) 30px, rgba(0, 0, 0, 0.2) 30px, rgba(0, 0, 0, 0.2) 33px, rgba(0, 0, 0, 0.18) 33px, rgba(0, 0, 0, 0.18) 36px, rgba(1, 1, 1, 0.12) 36px, rgba(1, 1, 1, 0.12) 39px, rgba(1, 1, 1, 0.13) 39px, rgba(1, 1, 1, 0.13) 42px, rgba(1, 1, 1, 0.2) 42px, rgba(1, 1, 1, 0.2) 45px, rgba(1, 1, 1, 0.18) 45px, rgba(1, 1, 1, 0.18) 48px, rgba(0, 0, 0, 0.2) 48px, rgba(0, 0, 0, 0.2) 51px, rgba(1, 1, 1, 0) 51px, rgba(1, 1, 1, 0) 54px, rgba(0, 0, 0, 0.03) 54px, rgba(0, 0, 0, 0.03) 57px, rgba(1, 1, 1, 0.06) 57px, rgba(1, 1, 1, 0.06) 60px, rgba(1, 1, 1, 0) 60px, rgba(1, 1, 1, 0) 63px, rgba(0, 0, 0, 0.1) 63px, rgba(0, 0, 0, 0.1) 66px, rgba(1, 1, 1, 0.19) 66px, rgba(1, 1, 1, 0.19) 69px), linear-gradient(90deg, rgb(239, 53, 115), rgb(79, 2, 93))'
    },
    {
        id: 'bg7',
        name: 'Backgorund 7',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(45deg, rgb(239, 7, 129) 0%, rgb(239, 7, 129) 6%,rgb(208, 10, 112) 6%, rgb(208, 10, 112) 25%,rgb(177, 13, 96) 25%, rgb(177, 13, 96) 40%,rgb(147, 16, 79) 40%, rgb(147, 16, 79) 45%,rgb(116, 19, 62) 45%, rgb(116, 19, 62) 53%,rgb(85, 22, 46) 53%, rgb(85, 22, 46) 66%,rgb(54, 25, 29) 66%, rgb(54, 25, 29) 100%)'
    },
    {
        id: 'bg8',
        name: 'Backgorund 8',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(0deg, rgb(61, 103, 216),rgb(65, 80, 170),rgb(53, 69, 115))'
    },
    {
        id: 'bg9',
        name: 'Backgorund 9',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(164deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.08) 50%,rgba(222, 222, 222, 0.08) 50%, rgba(222, 222, 222, 0.08) 100%),linear-gradient(73deg, rgba(182, 182, 182, 0.02) 0%, rgba(182, 182, 182, 0.02) 50%,rgba(216, 216, 216, 0.02) 50%, rgba(216, 216, 216, 0.02) 100%),linear-gradient(215deg, rgba(27, 27, 27, 0.09) 0%, rgba(27, 27, 27, 0.09) 50%,rgba(243, 243, 243, 0.09) 50%, rgba(243, 243, 243, 0.09) 100%),linear-gradient(236deg, rgba(242, 242, 242, 0.05) 0%, rgba(242, 242, 242, 0.05) 50%,rgba(16, 16, 16, 0.05) 50%, rgba(16, 16, 16, 0.05) 100%),linear-gradient(256deg, rgba(170, 170, 170, 0.07) 0%, rgba(170, 170, 170, 0.07) 50%,rgba(209, 209, 209, 0.07) 50%, rgba(209, 209, 209, 0.07) 100%),linear-gradient(126deg, rgba(204, 204, 204, 0.1) 0%, rgba(204, 204, 204, 0.1) 50%,rgba(26, 26, 26, 0.1) 50%, rgba(26, 26, 26, 0.1) 100%),linear-gradient(61deg, rgba(250, 250, 250, 0.01) 0%, rgba(250, 250, 250, 0.01) 50%,rgba(13, 13, 13, 0.01) 50%, rgba(13, 13, 13, 0.01) 100%),linear-gradient(56deg, rgba(210, 210, 210, 0.05) 0%, rgba(210, 210, 210, 0.05) 50%,rgba(79, 79, 79, 0.05) 50%, rgba(79, 79, 79, 0.05) 100%),linear-gradient(226deg, rgba(62, 62, 62, 0.08) 0%, rgba(62, 62, 62, 0.08) 50%,rgba(73, 73, 73, 0.08) 50%, rgba(73, 73, 73, 0.08) 100%),linear-gradient(90deg, rgb(236, 2, 158),rgb(161, 2, 79))'
    },
    {
        id: 'bg10',
        name: 'Backgorund 10',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(230deg, rgba(93, 93, 93, 0.03) 0%, rgba(93, 93, 93, 0.03) 50%,rgba(78, 78, 78, 0.03) 50%, rgba(78, 78, 78, 0.03) 100%),linear-gradient(107deg, rgba(55, 55, 55, 0.01) 0%, rgba(55, 55, 55, 0.01) 50%,rgba(170, 170, 170, 0.01) 50%, rgba(170, 170, 170, 0.01) 100%),linear-gradient(278deg, rgba(16, 16, 16, 0.03) 0%, rgba(16, 16, 16, 0.03) 50%,rgba(24, 24, 24, 0.03) 50%, rgba(24, 24, 24, 0.03) 100%),linear-gradient(205deg, rgba(116, 116, 116, 0.03) 0%, rgba(116, 116, 116, 0.03) 50%,rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.03) 100%),linear-gradient(150deg, rgba(5, 5, 5, 0.03) 0%, rgba(5, 5, 5, 0.03) 50%,rgba(80, 80, 80, 0.03) 50%, rgba(80, 80, 80, 0.03) 100%),linear-gradient(198deg, rgba(231, 231, 231, 0.03) 0%, rgba(231, 231, 231, 0.03) 50%,rgba(26, 26, 26, 0.03) 50%, rgba(26, 26, 26, 0.03) 100%),linear-gradient(278deg, rgba(89, 89, 89, 0.03) 0%, rgba(89, 89, 89, 0.03) 50%,rgba(26, 26, 26, 0.03) 50%, rgba(26, 26, 26, 0.03) 100%),linear-gradient(217deg, rgba(28, 28, 28, 0.03) 0%, rgba(28, 28, 28, 0.03) 50%,rgba(202, 202, 202, 0.03) 50%, rgba(202, 202, 202, 0.03) 100%),linear-gradient(129deg, rgba(23, 23, 23, 0.03) 0%, rgba(23, 23, 23, 0.03) 50%,rgba(244, 244, 244, 0.03) 50%, rgba(244, 244, 244, 0.03) 100%),linear-gradient(90deg, rgb(1, 64, 149),rgb(198, 5, 91))'
    },
    {
        id: 'bg11',
        name: 'Backgorund 11',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(135deg, rgb(59, 72, 175) 0%, rgb(59, 72, 175) 31%,rgb(55, 66, 150) 31%, rgb(55, 66, 150) 46%,rgb(51, 60, 126) 46%, rgb(51, 60, 126) 56%,rgb(48, 54, 101) 56%, rgb(48, 54, 101) 83%,rgb(44, 48, 77) 83%, rgb(44, 48, 77) 93%,rgb(40, 42, 52) 93%, rgb(40, 42, 52) 100%)'
    },
    {
        id: 'bg12',
        name: 'Backgorund 12',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(135deg, rgb(203, 70, 215) 0%, rgb(203, 70, 215) 28%,rgb(138, 55, 153) 28%, rgb(138, 55, 153) 39%,rgb(94, 44, 112) 39%, rgb(94, 44, 112) 41%,rgb(160, 60, 174) 41%, rgb(160, 60, 174) 42%,rgb(181, 65, 194) 42%, rgb(181, 65, 194) 44%,rgb(73, 39, 92) 44%, rgb(73, 39, 92) 59%,rgb(116, 49, 133) 59%, rgb(116, 49, 133) 95%,rgb(51, 34, 71) 95%, rgb(51, 34, 71) 100%)'
    },
    {
        id: 'bg13',
        name: 'Backgorund 13',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(45deg, rgb(149, 10, 155) 0%, rgb(149, 10, 155) 9%,rgb(120, 16, 136) 9%, rgb(120, 16, 136) 13%,rgb(178, 3, 174) 13%, rgb(178, 3, 174) 32%,rgb(91, 23, 117) 32%, rgb(91, 23, 117) 42%,rgb(32, 36, 79) 42%, rgb(32, 36, 79) 46%,rgb(61, 30, 98) 46%, rgb(61, 30, 98) 70%,rgb(3, 43, 60) 70%, rgb(3, 43, 60) 100%)'
    },
    {
        id: 'bg14',
        name: 'Backgorund 14',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(146deg, rgba(44, 35, 109, 0.5) 0%, rgba(44, 35, 109, 0.5) 14.286%,rgba(64, 54, 108, 0.5) 14.286%, rgba(64, 54, 108, 0.5) 28.572%,rgba(83, 72, 106, 0.5) 28.572%, rgba(83, 72, 106, 0.5) 42.858%,rgba(103, 91, 105, 0.5) 42.858%, rgba(103, 91, 105, 0.5) 57.144%,rgba(123, 110, 103, 0.5) 57.144%, rgba(123, 110, 103, 0.5) 71.43%,rgba(142, 128, 102, 0.5) 71.43%, rgba(142, 128, 102, 0.5) 85.716%,rgba(162, 147, 100, 0.5) 85.716%, rgba(162, 147, 100, 0.5) 100.002%),linear-gradient(349deg, rgb(203, 4, 7) 0%, rgb(203, 4, 7) 14.286%,rgb(178, 9, 6) 14.286%, rgb(178, 9, 6) 28.572%,rgb(152, 13, 5) 28.572%, rgb(152, 13, 5) 42.858%,rgb(127, 18, 4) 42.858%, rgb(127, 18, 4) 57.144%,rgb(101, 22, 3) 57.144%, rgb(101, 22, 3) 71.43%,rgb(76, 27, 2) 71.43%, rgb(76, 27, 2) 85.716%,rgb(50, 31, 1) 85.716%, rgb(50, 31, 1) 100.002%)'
    },
    {
        id: 'bg15',
        name: 'Backgorund 15',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(131deg, rgba(186, 186, 186, 0.01) 0%, rgba(186, 186, 186, 0.01) 16.667%,rgba(192, 192, 192, 0.01) 16.667%, rgba(192, 192, 192, 0.01) 33.334%,rgba(48, 48, 48, 0.01) 33.334%, rgba(48, 48, 48, 0.01) 50.001000000000005%,rgba(33, 33, 33, 0.01) 50.001%, rgba(33, 33, 33, 0.01) 66.668%,rgba(182, 182, 182, 0.01) 66.668%, rgba(182, 182, 182, 0.01) 83.33500000000001%,rgba(211, 211, 211, 0.01) 83.335%, rgba(211, 211, 211, 0.01) 100.002%),linear-gradient(148deg, rgba(48, 48, 48, 0.01) 0%, rgba(48, 48, 48, 0.01) 16.667%,rgba(178, 178, 178, 0.01) 16.667%, rgba(178, 178, 178, 0.01) 33.334%,rgba(192, 192, 192, 0.01) 33.334%, rgba(192, 192, 192, 0.01) 50.001000000000005%,rgba(237, 237, 237, 0.01) 50.001%, rgba(237, 237, 237, 0.01) 66.668%,rgba(194, 194, 194, 0.01) 66.668%, rgba(194, 194, 194, 0.01) 83.33500000000001%,rgba(227, 227, 227, 0.01) 83.335%, rgba(227, 227, 227, 0.01) 100.002%),linear-gradient(138deg, rgba(146, 146, 146, 0.03) 0%, rgba(146, 146, 146, 0.03) 25%,rgba(33, 33, 33, 0.03) 25%, rgba(33, 33, 33, 0.03) 50%,rgba(46, 46, 46, 0.03) 50%, rgba(46, 46, 46, 0.03) 75%,rgba(172, 172, 172, 0.03) 75%, rgba(172, 172, 172, 0.03) 100%),linear-gradient(38deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 16.667%,rgba(28, 28, 28, 0.03) 16.667%, rgba(28, 28, 28, 0.03) 33.334%,rgba(236, 236, 236, 0.03) 33.334%, rgba(236, 236, 236, 0.03) 50.001000000000005%,rgba(3, 3, 3, 0.03) 50.001%, rgba(3, 3, 3, 0.03) 66.668%,rgba(207, 207, 207, 0.03) 66.668%, rgba(207, 207, 207, 0.03) 83.33500000000001%,rgba(183, 183, 183, 0.03) 83.335%, rgba(183, 183, 183, 0.03) 100.002%),linear-gradient(145deg, rgba(20, 20, 20, 0.02) 0%, rgba(20, 20, 20, 0.02) 20%,rgba(4, 4, 4, 0.02) 20%, rgba(4, 4, 4, 0.02) 40%,rgba(194, 194, 194, 0.02) 40%, rgba(194, 194, 194, 0.02) 60%,rgba(34, 34, 34, 0.02) 60%, rgba(34, 34, 34, 0.02) 80%,rgba(71, 71, 71, 0.02) 80%, rgba(71, 71, 71, 0.02) 100%),linear-gradient(78deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 20%,rgba(95, 95, 95, 0.02) 20%, rgba(95, 95, 95, 0.02) 40%,rgba(71, 71, 71, 0.02) 40%, rgba(71, 71, 71, 0.02) 60%,rgba(7, 7, 7, 0.02) 60%, rgba(7, 7, 7, 0.02) 80%,rgba(130, 130, 130, 0.02) 80%, rgba(130, 130, 130, 0.02) 100%),linear-gradient(293deg, rgba(213, 213, 213, 0.03) 0%, rgba(213, 213, 213, 0.03) 20%,rgba(220, 220, 220, 0.03) 20%, rgba(220, 220, 220, 0.03) 40%,rgba(146, 146, 146, 0.03) 40%, rgba(146, 146, 146, 0.03) 60%,rgba(57, 57, 57, 0.03) 60%, rgba(57, 57, 57, 0.03) 80%,rgba(120, 120, 120, 0.03) 80%, rgba(120, 120, 120, 0.03) 100%),linear-gradient(90deg, rgb(225, 15, 180),rgb(78, 198, 243))'
    },
    {
        id: 'bg16',
        name: 'Backgorund 16',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(134deg, rgba(110, 49, 41, 0.5) 0%, rgba(110, 49, 41, 0.5) 14.286%,rgba(134, 48, 65, 0.5) 14.286%, rgba(134, 48, 65, 0.5) 28.572%,rgba(157, 46, 89, 0.5) 28.572%, rgba(157, 46, 89, 0.5) 42.858%,rgba(181, 45, 113, 0.5) 42.858%, rgba(181, 45, 113, 0.5) 57.144%,rgba(204, 43, 136, 0.5) 57.144%, rgba(204, 43, 136, 0.5) 71.43%,rgba(228, 42, 160, 0.5) 71.43%, rgba(228, 42, 160, 0.5) 85.716%,rgba(251, 40, 184, 0.5) 85.716%, rgba(251, 40, 184, 0.5) 100.002%),linear-gradient(122deg, rgb(223, 89, 139) 0%, rgb(223, 89, 139) 14.286%,rgb(195, 88, 127) 14.286%, rgb(195, 88, 127) 28.572%,rgb(167, 87, 116) 28.572%, rgb(167, 87, 116) 42.858%,rgb(140, 87, 104) 42.858%, rgb(140, 87, 104) 57.144%,rgb(112, 86, 92) 57.144%, rgb(112, 86, 92) 71.43%,rgb(84, 85, 81) 71.43%, rgb(84, 85, 81) 85.716%,rgb(56, 84, 69) 85.716%, rgb(56, 84, 69) 100.002%)'
    },
    {
        id: 'bg17',
        name: 'Backgorund 17',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(45deg, rgba(48, 160, 200, 0.36) 0%, rgba(48, 160, 200, 0.36) 27%,rgba(66, 208, 212, 0.36) 27%, rgba(66, 208, 212, 0.36) 30%,rgba(57, 184, 206, 0.36) 30%, rgba(57, 184, 206, 0.36) 38%,rgba(75, 232, 218, 0.36) 38%, rgba(75, 232, 218, 0.36) 41%,rgba(38, 135, 193, 0.36) 41%, rgba(38, 135, 193, 0.36) 67%,rgba(29, 111, 187, 0.36) 67%, rgba(29, 111, 187, 0.36) 68%,rgba(20, 87, 181, 0.36) 68%, rgba(20, 87, 181, 0.36) 71%,rgba(11, 63, 175, 0.36) 71%, rgba(11, 63, 175, 0.36) 100%),linear-gradient(45deg, rgba(120, 161, 172, 0.37) 0%, rgba(120, 161, 172, 0.37) 12.5%,rgba(83, 81, 120, 0.37) 12.5%, rgba(83, 81, 120, 0.37) 25%,rgba(132, 188, 189, 0.37) 25%, rgba(132, 188, 189, 0.37) 37.5%,rgba(95, 108, 137, 0.37) 37.5%, rgba(95, 108, 137, 0.37) 50%,rgba(144, 215, 206, 0.37) 50%, rgba(144, 215, 206, 0.37) 62.5%,rgba(107, 135, 154, 0.37) 62.5%, rgba(107, 135, 154, 0.37) 75%,rgba(156, 242, 223, 0.37) 75%, rgba(156, 242, 223, 0.37) 87.5%,rgba(71, 54, 103, 0.37) 87.5%, rgba(71, 54, 103, 0.37) 100%),linear-gradient(63deg, rgb(156, 214, 233),rgb(74, 10, 132))'
    },
    {
        id: 'bg18',
        name: 'Backgorund 18',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(305deg, rgba(34, 209, 50, 0.5) 0%, rgba(34, 209, 50, 0.5) 14.286%,rgba(43, 200, 57, 0.5) 14.286%, rgba(43, 200, 57, 0.5) 28.572%,rgba(51, 191, 65, 0.5) 28.572%, rgba(51, 191, 65, 0.5) 42.858%,rgba(60, 183, 72, 0.5) 42.858%, rgba(60, 183, 72, 0.5) 57.144%,rgba(69, 174, 79, 0.5) 57.144%, rgba(69, 174, 79, 0.5) 71.43%,rgba(77, 165, 87, 0.5) 71.43%, rgba(77, 165, 87, 0.5) 85.716%,rgba(86, 156, 94, 0.5) 85.716%, rgba(86, 156, 94, 0.5) 100.002%),linear-gradient(337deg, rgb(93, 142, 23) 0%, rgb(93, 142, 23) 14.286%,rgb(118, 154, 34) 14.286%, rgb(118, 154, 34) 28.572%,rgb(143, 166, 44) 28.572%, rgb(143, 166, 44) 42.858%,rgb(169, 178, 55) 42.858%, rgb(169, 178, 55) 57.144%,rgb(194, 190, 66) 57.144%, rgb(194, 190, 66) 71.43%,rgb(219, 202, 76) 71.43%, rgb(219, 202, 76) 85.716%,rgb(244, 214, 87) 85.716%, rgb(244, 214, 87) 100.002%)'
    },
    {
        id: 'bg19',
        name: 'Backgorund 19',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(23deg, rgba(40, 86, 2, 0.2),rgba(77, 29, 2, 0.2)),linear-gradient(45deg, rgb(127, 14, 82) 0%,rgb(146, 13, 79) 29%,rgb(205, 12, 69) 65%,rgb(107, 14, 85) 69%,rgb(185, 12, 72) 83%,rgb(166, 13, 76) 87%,rgb(224, 11, 66) 100%)'
    },
    {
        id: 'bg20',
        name: 'Backgorund 20',
        isSelected: false,
        type: BACKGROUND_TYPE.gradient,
        bg:
            'linear-gradient(56deg, rgba(254, 254, 254, 0.05) 0%, rgba(254, 254, 254, 0.05) 69%,rgba(160, 160, 160, 0.05) 69%, rgba(160, 160, 160, 0.05) 100%),linear-gradient(194deg, rgba(102, 102, 102, 0.02) 0%, rgba(102, 102, 102, 0.02) 60%,rgba(67, 67, 67, 0.02) 60%, rgba(67, 67, 67, 0.02) 100%),linear-gradient(76deg, rgba(169, 169, 169, 0.06) 0%, rgba(169, 169, 169, 0.06) 89%,rgba(189, 189, 189, 0.06) 89%, rgba(189, 189, 189, 0.06) 100%),linear-gradient(326deg, rgba(213, 213, 213, 0.04) 0%, rgba(213, 213, 213, 0.04) 45%,rgba(66, 66, 66, 0.04) 45%, rgba(66, 66, 66, 0.04) 100%),linear-gradient(183deg, rgba(223, 223, 223, 0.01) 0%, rgba(223, 223, 223, 0.01) 82%,rgba(28, 28, 28, 0.01) 82%, rgba(28, 28, 28, 0.01) 100%),linear-gradient(3deg, rgba(20, 20, 20, 0.06) 0%, rgba(20, 20, 20, 0.06) 62%,rgba(136, 136, 136, 0.06) 62%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(200deg, rgba(206, 206, 206, 0.09) 0%, rgba(206, 206, 206, 0.09) 58%,rgba(6, 6, 6, 0.09) 58%, rgba(6, 6, 6, 0.09) 100%),linear-gradient(304deg, rgba(162, 162, 162, 0.07) 0%, rgba(162, 162, 162, 0.07) 27%,rgba(24, 24, 24, 0.07) 27%, rgba(24, 24, 24, 0.07) 100%),linear-gradient(186deg, rgba(166, 166, 166, 0.04) 0%, rgba(166, 166, 166, 0.04) 5%,rgba(210, 210, 210, 0.04) 5%, rgba(210, 210, 210, 0.04) 100%),linear-gradient(90deg, rgb(26, 118, 64),rgb(32, 207, 121),rgb(78, 196, 128))'
    }
];
