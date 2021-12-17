#!/usr/bin/env bash

function run {
  if ! pgrep -f $1 ;
  then
    $@&
  fi
}
run lxsession &
run picom &
run nitrogen --restore &
systemctl stop snapd.sockets &
