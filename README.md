# Story Engine Cards

This webpage is a virtual tabletop for using The Story Engine cards.

## Card Generation

Before the page can be used, it is necessary to extract images from the officially distributed PDF versions of the cards. This can be accomplished by placing the contents of the PDF package in a directory named 'raw' and running the `convert.js` script. This repository comes with the demo set of cards already extracted. To switch from the demo set to the full set, change the `DEMO_ONLY` constant in `decks.js` to `false`.

## Running

Once cards have been generated, it should be sufficient to simply open `index.html` in any modern web browser. All interactions are client-side only. Your changes are periodically saved to browser storage and loaded on refresh.