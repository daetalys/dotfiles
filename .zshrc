# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=10000
setopt autocd beep extendedglob nomatch notify
bindkey -e
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/home/daetalys/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall
alias dotfiles='/usr/bin/git --git-dir=/home/daetalys/.dotfiles/ --work-tree=/home/daetalys'
