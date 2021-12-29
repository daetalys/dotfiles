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
export HISTCONTROL=ignoredups:erasedups           # no duplicate entries
export ALTERNATE_EDITOR=""                        # setting for emacsclient
export EDITOR="emacsclient -t -a ''"              # $EDITOR use Emacs in terminal
export VISUAL="emacsclient -c -a emacs"           # $VISUAL use Emacs in GUI mode

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
