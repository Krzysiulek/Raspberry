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


## FAQ
After preinstall system you see `ssh remote host identification has changed` error:
```shell
ssh-keygen -R <raspberry_host>
```
