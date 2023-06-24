#!/bin/bash

# Define an array of dotfiles and configuration directories to be moved and symlinked
dotfiles=(
  ".bashrc"
  ".config/*"
  ".zshrc"
  #...Add additional dotfiles to version control here...#
)

# Set the dotfiles repository directory
repo_dir="$HOME/.files"

# Move each file or directory to the dotfiles repository and create a symlink
for dotfile in "${dotfiles[@]}"; do
  if [ -e "$HOME/$dotfile" ]; then
    # Move the file or directory to the repository
    mv "$HOME/$dotfile" "$repo_dir"

    # Create a symlink in the original location
    ln -s "$repo_dir/$dotfile" "$HOME/$dotfile"
  else
    echo "WARNING: $dotfile not found, skipping."
  fi
done

echo "Dotfiles setup complete."
