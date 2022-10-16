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
# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Advanced command-not-found hook
source /usr/share/doc/find-the-command/ftc.bash
if [ -f /etc/bash.command-not-found ]; then
    . /etc/bash.command-not-found
fi

# Aliases
source ~/.config/aliases

# Archive Extraction
## usage: ex <file>
ex ()
{
  if [ -f "$1" ] ; then
    case $1 in
      *.tar.bz2)   tar xjf $1   ;;
      *.tar.gz)    tar xzf $1   ;;
      *.bz2)       bunzip2 $1   ;;
      *.rar)       unrar x $1   ;;
      *.gz)        gunzip $1    ;;
      *.tar)       tar xf $1    ;;
      *.tbz2)      tar xjf $1   ;;
      *.tgz)       tar xzf $1   ;;
      *.zip)       unzip $1     ;;
      *.Z)         uncompress $1;;
      *.7z)        7z x $1      ;;
      *.deb)       ar x $1      ;;
      *.tar.xz)    tar xf $1    ;;
      *.tar.zst)   unzstd $1    ;;
      *)           echo "'$1' cannot be extracted via ex()" ;;
    esac
  else
    echo "'$1' is not a valid file"
  fi
}


# Exports
export TERM="xterm-256color"                      # getting proper colors
export COLORTERM="truecolor"
export HISTCONTROL=ignoredups:erasedups           # no duplicate entries
#export VISUAL="emacsclient -c -a emacs"           # $VISUAL use Emacs in GUI mode
export VISUAL="vim"
#export EDITOR="emacsclient -t -a ''"              # $EDITOR use Emacs in terminal
export EDITOR="vim"
#export ALTERNATE_EDITOR=""                        # setting for emacsclient
export CODEEDITOR="vscodium"

# Manpager Environment Variables
## Uncomment only one of these!

### "bat" as manpager
export MANPAGER="sh -c 'col -bx | bat -l man -p'"

### "vim" as manpager
# export MANPAGER='/bin/bash -c "vim -MRn -c \"set buftype=nofile showtabline=0 ft=man ts=8 nomod nolist norelativenumber nonu noma\" -c \"normal L\" -c \"nmap q :qa<CR>\"</dev/tty <(col -b)"'

### "neovim" as manpager
# export MANPAGER="nvim -c 'set ft=man' -"

# Path Environment Variables
if [ -d "$HOME/.bin" ] ;
  then PATH="$HOME/.bin:$PATH"
fi

if [ -d "$HOME/.local/bin" ] ;
  then PATH="$HOME/.local/bin:$PATH"
fi

if [ -d "$HOME/Applications" ] ;
  then PATH="$HOME/Applications:$PATH"
fi

if [ -d "$HOME/.local/share/solana/install/active_release/bin" ] ;
  then PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
fi

if [ -d "$HOME/.cargo/bin" ] ;
  then PATH="$HOME/.cargo/bin:$PATH"
fi

if [ -d "/var/lib/flatpak/exports/share" ] ;
  then PATH="/var/lib/flatpak/exports/share:$PATH"
fi

if [ -d "$HOME/.local/share/flatpak/exports/share" ] ;
  then PATH="$HOME/.local/share/flatpak/exports/share:$PATH"
fi

if [ -d "$HOME/.emacs.d/bin" ] ;
then PATH="$HOME/emacs.d/bin:$PATH"
fi

# Prompt
## Comment if using starship prompt
### PS1='[\u@\h \W]\$ '

# CHANGE TITLE OF TERMINALS
case ${TERM} in
  xterm*|rxvt*|Eterm*|aterm|kterm|gnome*|alacritty|st|konsole*)
    PROMPT_COMMAND='echo -ne "\033]0;${USER}@${HOSTNAME%%.*}:${PWD/#$HOME/\~}\007"'
        ;;
  screen*)
    PROMPT_COMMAND='echo -ne "\033_${USER}@${HOSTNAME%%.*}:${PWD/#$HOME/\~}\033\\"'
    ;;
esac

# Vi Mode
## Comment this line out to enable default emacs-like bindings
### set -o vi
### bind -m vi-command 'Control-l: clear-screen'
### bind -m vi-insert 'Control-l: clear-screen'

# Load starship prompt if starship is installed
if  [ -x /usr/bin/starship ]; then
    __main() {
        local major="${BASH_VERSINFO[0]}"
        local minor="${BASH_VERSINFO[1]}"

        if ((major > 4)) || { ((major == 4)) && ((minor >= 1)); }; then
            source <("/usr/bin/starship" init bash --print-full-init)
        else
            source /dev/stdin <<<"$("/usr/bin/starship" init bash --print-full-init)"
        fi
    }
    __main
    unset -f __main
fi


# BEGIN_KITTY_SHELL_INTEGRATION
if test -n "$KITTY_INSTALLATION_DIR" -a -e "$KITTY_INSTALLATION_DIR/shell-integration/bash/kitty.bash"; then source "$KITTY_INSTALLATION_DIR/shell-integration/bash/kitty.bash"; fi
# END_KITTY_SHELL_INTEGRATION

### RANDOM COLOR SCRIPT ###
colorscript random
