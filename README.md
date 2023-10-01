# Nostr 10_1 bot

```sh
nvim config/nsec.txt

# Input HEX private key
# e.g.
cat config/nsec.txt
#=> 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef

asdf install
npm i
node index.js
```

## Future events

`archives/2XXX.json` are the future events.

You can verify them by:

```sh
npm i
node verify.js
```
