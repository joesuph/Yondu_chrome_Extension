# Yondu_chrome_Extension
A chrome extension that allows someone to navigate the web hands-free by whistling

### See js console version below to use simply without chrome extension setup

## Installation
1. Open a chromium based browser (Google Chrome, Brave, etc)
2. Open Extensions page in settings
3. In the top right corner, toggle developer mode to 'on' (orange and to the right)
4. Click load unpacked, select the folder yondu_extension from with yondu_chrome_extension folder

## Using Chrome Extension
1. Open a tab of a website with a scroll bar
2. Click on extension
3. In extension popup click start microphone button
4. Click Ok to prompt
5. From next prompt allow page to access microphone
6. Whistle higher notes to scroll up
7. Whistle Lower notes to scroll down

## Using JS Console Version
1. Open a web website with scroll bar
2. Open Js console in developer panel (Ctrl+shift+j)
3. Copy text from "paste-into-js-console-version.js" (open file in repo click "raw" and ctrl-a then ctrl-c to copy entire page) 
4. Paste text into js console
5. Then in js console run `setupMic()`
6. Give page permission to access microphone
7. Whistle high notes to scroll up and low notes to scroll down

## TODO
1. Implement calibration settings in the extensions popup window
2. Implement more features than scrolling
