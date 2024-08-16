# Getting started

## Requirements

You have to have ansible installed:
```shell
# MacOS
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
ansible-playbook -i inventory.ini ./playbooks/setup-server.yml --ask-vault-pass
```

## Deploy all apps

To deploy all indispensable (for me) apps, there is master playbook which includes all, required, small playbooks:
```shell
cd ansible
ansible-playbook -i inventory.ini ./playbooks/deploy-apps.yml --ask-vault-pass
```

It includes:
- Home Assistant - docker application to manage your smart home.
- Cockpit - dashboard with your server status.

## Utils commands
In directory ``ansible/playbooks/utils`` there are some util commands. They are not required to setup machine, but useful for testing.

Example usage:

```shell
cd ansible
ansible-playbook -i inventory.ini ./playbooks/utils/restart-samba.yml --ask-vault-pass
```

## FAQ
After reinstall system you see `ssh remote host identification has changed` error:
```shell
ssh-keygen -R <raspberry_host>
```

There are secret.yml files in repo. To edit them you need to use command:
```shell
ansible-vault edit <FILE_NAME>.yml
```

To create new secret type:
```shell
ansible-vault create <FILE_NAME>.yml
```
