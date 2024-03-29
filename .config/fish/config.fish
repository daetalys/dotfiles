#    ____            __        __      __  _           
#   / __ \____ ___  / /_____ _/ /_  __/ /_(_)________ _
#  / / / / __ ` _ \/ __/ __ `/ / / / / __/ / ___/ __ `/
# / /_/ / /_/   __/ /_/ /_/ / / /_/ / /_/ / /__/ /_/ / 
#/_____/\__,_____/\__/\__,_/_/\__, /\__/_/\___/\__,_/  
#                            /____/                    
#  https://daetalytica.io   oracle@daetalytica.io
#               .^~.            .~^.               
#            :^^!~.              .~!^^:            
#         :^^:.^^                  ^^.:^^:         
#      .^^:. .~^                    ^~. .:^^.      
#      :!   :!^^^:..:^^:.  .:^^:..:^^^!:   !:      
#      :!   :^^::::^~:.:^~~^:.:~^::::^^.   !:      
#      .^^^:   .:^^::.   ^^   .::^^:.   :^^^.      
#     ^~  .:^^:.   ^!^   ^^   ^!^.  .:^^:.  ~^     
#     !7~.   .:^^:.      ^^      .:^^:.   .~7!.    
#    .!!7!~:.    .^^^:.  ^^  .:^^^.    .:~!7!!.    
#     ^7!!77!~^:.   .^!: ^^ :!~.   .:^~!77!!7^     
#      ^77!!!!77!~^:     ^^     :^~!77!!!!7!^      
#       :~!77^:!!777!:   ^^   :!777!!^^!7!~.       
#         .:^^ :!!!!~!~  ^^  ~!~!!!!: ^^:.         
#               !!!! .~: ^^ :~. !!!!               
#              .!77~   . !! .   ~77!.              
#              .^~!7!^.  ..  .^!7!~^.              
#               ..:^!7!~.  .~!7!^:..               
#               .:^^~7!7!^^!7!7~^^:.               
#                  .:^!777777!^:.                  
#                      :!77!:                      
#                        ^^                        
#                                                  
# ~/.config/fish/config.fish
##!/usr/local/bin/fish

# Aliases
#source ~/.config/aliases

# export HISTORY_IGNORE="(ls|cd|pwd|exit|sudo reboot|history|cd -|cd ..)"

### Set EXPORT Values
set fish_greeting                     # hide welcome message
set TERM "xterm-256color"             # set terminal type
set EDITOR "vim"                      # $EDITOR use TUI
set VISUAL "emacsclient -c -a emacs"  # $VISUAL use GUI
set VIRTUAL_ENV_DISABLE_PROMPT "1"
set -x MANPAGER "sh -c 'col -bx | bat -l man -p'"

## Export variable need for qt-theme
if type "qtile" >> /dev/null 2>&1
   set -x QT_QPA_PLATFORMTHEME "qt5ct"
end

# Set settings for https://github.com/franciscolourenco/done
set -U __done_min_cmd_duration 10000
set -U __done_notification_urgency_level low


## Environment setup
# Apply .profile: use this to put fish compatible .profile stuff in
if test -f ~/.fish_profile
  source ~/.fish_profile
end

# Add ~/.local/bin to PATH
if test -d ~/.local/bin
    if not contains -- ~/.local/bin $PATH
        set -p PATH ~/.local/bin
    end
end

# Add depot_tools to PATH
if test -d ~/Applications/depot_tools
    if not contains -- ~/Applications/depot_tools $PATH
        set -p PATH ~/Applications/depot_tools
    end
end

## Advanced command-not-found hook
# source /usr/share/doc/find-the-command/ftc.fish

## Functions
# Functions needed for !! and !$ https://github.com/oh-my-fish/plugin-bang-bang
function __history_previous_command
  switch (commandline -t)
  case "!"
    commandline -t $history[1]; commandline -f repaint
  case "*"
    commandline -i !
  end
end

function __history_previous_command_arguments
  switch (commandline -t)
  case "!"
    commandline -t ""
    commandline -f history-token-search-backward
  case "*"
    commandline -i '$'
  end
end

if [ "$fish_key_bindings" = fish_vi_key_bindings ];
  bind -Minsert ! __history_previous_command
  bind -Minsert '$' __history_previous_command_arguments
else
  bind ! __history_previous_command
  bind '$' __history_previous_command_arguments
end

# Fish command history
function history
    builtin history --show-time='%F %T '
end

function backup --argument filename
    cp $filename $filename.bak
end

# Copy DIR1 DIR2
function copy
    set count (count $argv | tr -d \n)
    if test "$count" = 2; and test -d "$argv[1]"
	set from (echo $argv[1] | trim-right /)
	set to (echo $argv[2])
        command cp -r $from $to
    else
        command cp $argv
    end
end

## Run neofetch if session is interactive
if status --is-interactive && type -q neofetch
   neofetch
end

## Starship prompt
if status --is-interactive
   source ("/usr/bin/starship" init fish --print-full-init | psub)
end
