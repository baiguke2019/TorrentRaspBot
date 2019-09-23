#!/bin/bash
wget -O Super_Secret_File $1 #We download the file
mv Super_Secret_File ~  #We move to home
VAR=$(file -b ~/Super_Secret_File) #Assigned the type of file to VAR
if $VAR=="BitTorrent"
    then
    #####Starting Transmission Commands 
    echo Es Torrent
fi
mkdir -p ~/mnt/gdrive/TorrentRaspBotDownloads

mv ~/Super_Secret_File ~/mnt/gdrive/TorrentRaspBotDownloads
