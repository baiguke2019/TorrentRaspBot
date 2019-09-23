#!/bin/bash
wget -O Super_Secret_File  $1 #We download the file
mv Super_Secret_File ~  #We move to home
VAR=$(file -b ~/Super_Secret_File) #Assigned the type of file to VAR
if VAR=="BitTorrent"
    then
    #####Starting Transmission Commands 
    echo Es Torrent
fi
if [!-d "~/mnt/gdrive/TorrentRaspBotDownloads"];
    then mkdir ~/mnt/gdrive/TorrentRaspBotDownloads
fi
mv ~/Super_Secret_File ~/mnt/gdrive/TorrentRaspBotDownloads