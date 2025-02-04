# navmode

Turn navmode and commode on/off. So you can use it in your keybindings:

```json
{
    "key": "alt+f",
    "command": "navmode.on"
},
{
    "key": "alt+j",
    "command": "commode.on"
},
{
    "key": "alt+n",
    "command": "modes.off"
},

{
    "key": "j",
    "command": "cursorLeft",
    "when": "navmode"
}
