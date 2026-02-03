# [Ly<sub><sup><sub>rics </sub></sup></sub>Sy<sub><sup><sub>ncer</sub></sup></sub>](https://lysy.connorc.dev)

Welcome to the Lyrics Syncer Tool! This web application helps you create [LRC](<https://en.m.wikipedia.org/wiki/LRC_(file_format)>) files easily and quickly. With our user-friendly interface, you can add timestamps to your lyrics and download the final LRC file hassle-free.

> [!NOTE]
> This is an independently maintained fork based on [LySy](https://github.com/pxeemo/LySy), and may be out of date or unstable.
> The purpose of this fork is to maintain changes that fit my personal workflow.
>
> Feel free to use this fork or open an issue here, but requests made upstream will likely get a faster response.  
> Any changes I consider generally useful to most users will likely be proposed upstream.

## Features

- [x] Easy back and forth movements
- [x] Edit and remove items
- [x] Overwrite `By` and `Re` metadata fields
- [x] Responsive design
- [x] Load text from file
    - [x] Raw text
    - [x] `LRC` text, type, and timestamps
- [x] Word-by-word syncing
- [x] Syllable-by-syllable syncing
- [x] Duet and bg tags support
- [ ] Export as:
    - [x] LRC
    - [ ] JSON
    - [ ] TTML
    - [ ] SRT

## How to Use

1. **Input Lyrics**: Paste your song lyrics into the text area and press the "Load" button.
2. **Add Timestamps**: Press the "Next" button (or <kbd>Space</kbd>) when the line starts to add timestamps to it.

    You can also press "Back" button (or <kbd>Shift+Space</kbd>) to undo the last timestamp if you pressed next by mistake.

3. **Download**: Click the "Save" button to save your file.
4. **Use**: Put the downloaded file under the same directory with the same name as your music file to show up on supported music players _(such as [Gramophone](https://github.com/AkaneTan/Gramophone))_

    Alternatively you can embed lyrics into your music tags using a music tag editor tool.

## Contributing

We welcome contributions! If you have suggestions, bug reports, or features you'd like to see, please submit an issue or create a pull request.  
However, not all changes made to this fork will be upstreamed. For broader reach, consider submitting your contributions on the [upstream](https://github.com/pxeemo/lysy).

## Acknowledgements

Thanks to [lrcgenerator.com](http://lrcgenerator.com/) and the [Musicolet Music Payer](https://play.google.com/store/apps/details?id=in.krosbits.musicolet) for inspiring the idea behind this project.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
