# Nostr 10_1 bot

## Preparation

```sh
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install
npm i
```

## How to publish

Run at 2XXX-10-01T09:00:00+09:00.

```sh
node index.js
```

## Future events

`archives/2XXX.json` are the future events.

You can verify them by:

```sh
node verify.js
```

## Create more events

```sh
nvim config/nsec.txt

# Input HEX private key
# e.g.
cat config/nsec.txt
#=> 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef

nvim create.js
# Update `year <= XXXX` of for loop

node create.js
```
