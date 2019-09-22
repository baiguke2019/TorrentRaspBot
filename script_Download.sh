#!/bin/bash
wget -O Super_Secret_File  $1 #We download the file and check what is
mv Super_Secret_File ~
VAR=$(file -b ~/Super_Secret_File)
echo $VAR
