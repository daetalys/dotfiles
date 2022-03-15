# ❯ mkdir $HOME/Documents/dotfiles
# ❯ cp $HOME/{.vimrc, .gitconfig, .zshrc} $HOME/Documents/dotfiles

#!/bin/bash

dotfiles=(".vimrc" ".zshrc" ".gitconfig")

dir="${HOME}/Documents/dotfiles"

for dotfile in "${dotfiles[@]}";do
 ln -sf "${HOME}/${dotfile}" "${dir}"
done
