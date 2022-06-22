# Discord-play-together

## To Do

- [ ] Improve the documentation
  - [x] Add github page with the documentation (at https://ena0.github.io/discord-play-together/)
  - [ ] correct orthography errors 
- [ ] Improve the package
  - [ ] Add some event
  - [ ] Add management features

## Table of content

 -  [Discord-play-together](#discord-play-together)
 -  [To Do](#to-do)
 -  [Table of content](#table-of-content)
 -  [Installation](#installation)
 -  [activity list](#activity-list)
 -  [usage](#usage)
    -   [create a code](#create-a-code)

## Installation

```bash
npm install discord-play-together
```

## activity list

- `youtube` / `youtubedev`
- `poker`
- `betrayal`
- `fishing`
- `chess` / `chessdev`
- `lettertile`
- `wordsnack`
- `doodlecrew`
- `awkword`
- `spellcast`
- `checkers`
- `puttparty`
- `sketchheads`
- `ocho`

## Usage

### Create a code

```javascript
createCode(channel_id, {
    activity: "youtube", //choose one form the list
	/*optionnal*/ duration: 86400, //in ms 
	/*optionnal*/ neverExpire: false,
	/*optionnal*/ maxUses: 0
})
```

that will return you something like that:

```json
{
	code: "https://discord.com/invite/123456",
    expireAt: 1234567891,
    activity: {
        id: 880218394199220334,
        name: "youtube",
        icon: "",
        description: "",
    },
    guild: {...}, //the guild
    channel: {...}, //the channel
    inviter: {...} //the user
}
```



