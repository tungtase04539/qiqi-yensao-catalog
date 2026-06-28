import subprocess, os
FB='/tmp/claude-0/-home-claude/85c8b0f7-4d4c-5666-9f24-d109bff60d94/scratchpad/fonts/node_modules/@expo-google-fonts'
OUT='/home/claude/repo/site/assets/fonts'
USED='/tmp/claude-0/-home-claude/85c8b0f7-4d4c-5666-9f24-d109bff60d94/scratchpad/used.txt'
LAT="U+0020-007E,U+00A0-024F,U+0300-036F,U+1E00-1EFF,U+2000-206F,U+2022,U+20AB,U+00D7,U+2264,U+2265"
# (src_rel, out_name, mode)  mode: 'lat' uses ranges, 'cjk' uses --text-file
jobs=[
 ('playfair-display/500Medium/PlayfairDisplay_500Medium.ttf','playfair-500.woff2','lat'),
 ('playfair-display/600SemiBold/PlayfairDisplay_600SemiBold.ttf','playfair-600.woff2','lat'),
 ('playfair-display/700Bold/PlayfairDisplay_700Bold.ttf','playfair-700.woff2','lat'),
 ('playfair-display/800ExtraBold/PlayfairDisplay_800ExtraBold.ttf','playfair-800.woff2','lat'),
 ('playfair-display/900Black/PlayfairDisplay_900Black.ttf','playfair-900.woff2','lat'),
 ('playfair-display/500Medium_Italic/PlayfairDisplay_500Medium_Italic.ttf','playfair-500i.woff2','lat'),
 ('playfair-display/600SemiBold_Italic/PlayfairDisplay_600SemiBold_Italic.ttf','playfair-600i.woff2','lat'),
 ('playfair-display/700Bold_Italic/PlayfairDisplay_700Bold_Italic.ttf','playfair-700i.woff2','lat'),
 ('be-vietnam-pro/300Light/BeVietnamPro_300Light.ttf','bevietnam-300.woff2','lat'),
 ('be-vietnam-pro/400Regular/BeVietnamPro_400Regular.ttf','bevietnam-400.woff2','lat'),
 ('be-vietnam-pro/500Medium/BeVietnamPro_500Medium.ttf','bevietnam-500.woff2','lat'),
 ('be-vietnam-pro/600SemiBold/BeVietnamPro_600SemiBold.ttf','bevietnam-600.woff2','lat'),
 ('be-vietnam-pro/700Bold/BeVietnamPro_700Bold.ttf','bevietnam-700.woff2','lat'),
 ('be-vietnam-pro/800ExtraBold/BeVietnamPro_800ExtraBold.ttf','bevietnam-800.woff2','lat'),
 ('noto-sans-sc/400Regular/NotoSansSC_400Regular.ttf','notosanssc-400.woff2','cjk'),
 ('noto-sans-sc/500Medium/NotoSansSC_500Medium.ttf','notosanssc-500.woff2','cjk'),
 ('noto-sans-sc/700Bold/NotoSansSC_700Bold.ttf','notosanssc-700.woff2','cjk'),
 ('noto-serif-sc/600SemiBold/NotoSerifSC_600SemiBold.ttf','notoserifsc-600.woff2','cjk'),
 ('noto-serif-sc/700Bold/NotoSerifSC_700Bold.ttf','notoserifsc-700.woff2','cjk'),
 ('noto-serif-sc/900Black/NotoSerifSC_900Black.ttf','notoserifsc-900.woff2','cjk'),
]
for src,out,mode in jobs:
    args=['pyftsubset', os.path.join(FB,src), '--flavor=woff2', '--layout-features=*',
          '--output-file='+os.path.join(OUT,out)]
    if mode=='lat': args.append('--unicodes='+LAT)
    else: args.append('--text-file='+USED)
    subprocess.run(args, check=True)
    sz=os.path.getsize(os.path.join(OUT,out))//1024
    print(f'{out:24} {sz} KB')
