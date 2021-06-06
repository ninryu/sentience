#!/bin/sh

usage() { echo "  > Usage: $0 [-s <firefox|chrome>]" 1>&2; exit 1; }

package_firefox() {
    if [ ! -f "./release/startpage-firefox.zip" ]; then
        zip -r -FS ./release/startpage-firefox.zip * --exclude '*.git*' --exclude 'release' --exclude '*.md' --exclude '.prettierrc.json' --exclude 'package.sh' --exclude 'startpage-chrome' --exclude 'startpage-firefox.zip'
    else
        rm ./release/startpage-firefox.zip
        package_firefox
    fi
}

package_chrome() {
    if [ ! -d "./release/startpage-chrome" ]; then
        mkdir ./release/startpage-chrome
        rsync -av . release/startpage-chrome --exclude={'*.git*','release','*.md','.prettierrc.json','package.sh'}
    else
        rsync -av . release/startpage-chrome --exclude={'*.git*','release','*.md','.prettierrc.json','package.sh'}
    fi
}

while getopts ":b:p:" o; do
    case "${o}" in
        b)
            b=${OPTARG}
            if [ ${b} == "firefox" ] || [ ${b} == "ff" ]; then
                if [ ! -d "./release" ]; then
                    mkdir ./release
                    package_firefox
                else
                    package_firefox
                fi
            elif [ ${b} == "chrome" ] || [ ${b} == "cr" ]; then
                if [ ! -d "./release" ]; then
                    mkdir ./release
                    package_chrome
                else
                    package_chrome
                fi
            else
                usage
            fi
            ;;
        *)
            usage
            ;;
    esac
done