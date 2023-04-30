#!/usr/bin/bash

echo "setting up required softwares/dependencies"

#setting up node
if ! command -v node &> /dev/null
then
        echo "log: Installing node"
        curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
        sudo apt-get install -y nodejs
        version=$(node -v)
        echo "log: node installed $version"
else
        version=$(node -v)
        echo "log: Node already installed $version"
fi

#setting up npm
if command -v npm >/dev/null 2>&1 ; then
        npm_version=$(npm -v)
        echo "log: npm already installed -v$npm_version"
else
        curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
        sudo apt-get install -y nodejs
        npm_version=$(npm -v)
        echo "log: npm installed version -v$npm_version"
fi

#Installing dependencies
npm install