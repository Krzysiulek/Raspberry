# Getting started

## Requirements

You have to have ansible installed:
```shell
brew install ansible
```


Pass ssh key to log into your server:
```shell
ssh-copy-id admin@<raspberry_host>
```

## Setup server

To setup server, there is master playbook which includes all, required, small playbooks:
```shell
cd ansible
ansible-playbook -i inventory.ini ./playbooks/setup-server.yml
```


## FAQ
After preinstall system you see `ssh remote host identification has changed` error:
```shell
ssh-keygen -R <raspberry_host>
```
