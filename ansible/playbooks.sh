#!/bin/bash

if ! command -v fzf >/dev/null 2>&1; then
    echo "This script requires 'fzf'. Install using 'brew install fzf'."
    exit 1
fi

ignore_patterns=("docker-compose")

find_cmd=(find . -type f \( -iname "*.yml" -o -iname "*.yaml" \))
for pattern in "${ignore_patterns[@]}"; do
    find_cmd+=(! -iname "*$pattern*")
done

playbook=$("${find_cmd[@]}" | fzf --prompt="Choose playbook: ")

if [ -z "$playbook" ]; then
    echo "Canceled"
    exit 0
fi

echo "Running: $playbook"
ansible-playbook  -i inventory.ini  "$playbook"
