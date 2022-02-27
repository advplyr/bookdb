# Google Books API

## Docs

https://developers.google.com/books/docs/v1/using

## Usage

#### in title
https://www.googleapis.com/books/v1/volumes?q=intitle:Animal%20Farm

#### in author
https://www.googleapis.com/books/v1/volumes?q=inauthor:George%20Orwell

#### Get volume by id

https://www.googleapis.com/books/v1/volumes/EIDJtAEACAAJ

## Volume Object

```json
{
  "kind": "books#volume",
  "id": "EIDJtAEACAAJ",
  "etag": "NKrGYkyOd1Y",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/EIDJtAEACAAJ",
  "volumeInfo": {
    "title": "Animal Farm",
    "authors": [
      "George George Orwell"
    ],
    "publisher": "CreateSpace Independent Publishing Platform",
    "publishedDate": "2018-03-13",
    "description": "Animal Farm is an allegorical novella reflecting events leading up to the Russian Revolution of 1917 and then on into the Stalinist era of the Soviet Union. Orwell, a democratic socialist, was a critic of Joseph Stalin and hostile to Moscow-directed Stalinism. In the book, Old Major, the old boar on the Manor Farm, summons the animals on the farm together for a meeting, during which he refers to humans as \"enemies\" and teaches the animals a revolutionary song called \"Beasts of England.\" When Major dies, two young pigs, Snowball and Napoleon, assume command and consider it a duty to prepare for the Rebellion. The animals revolt, driving the drunken, irresponsible farmer Mr Jones, as well as Mrs Jones and the other human caretakers and employees, off the farm, renaming it \"Animal Farm.\" They adopt the Seven Commandments of Animalism, the most important of which is, \"All animals are equal.\" The original title was Animal Farm: A Fairy Story; U.S. publishers dropped the subtitle when it was published in 1946, and only one of the translations during Orwell's lifetime kept it. Eric Arthur Blair (25 June 1903 - 21 January 1950), better known by his pen name George Orwell, was an English novelist, essayist, journalist, and critic. His work is marked by lucid prose, awareness of social injustice, opposition to totalitarianism, and outspoken support of democratic socialism.",
    "industryIdentifiers": [
      {
        "type": "ISBN_10",
        "identifier": "198653314X"
      },
      {
        "type": "ISBN_13",
        "identifier": "9781986533140"
      }
    ],
    "readingModes": {
      "text": false,
      "image": false
    },
    "pageCount": 46,
    "printedPageCount": 46,
    "dimensions": {
      "height": "22.90 cm",
      "width": "15.20 cm",
      "thickness": "0.30 cm"
    },
    "printType": "BOOK",
    "averageRating": 4,
    "ratingsCount": 8,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=EIDJtAEACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE70DemeVstJtI78Pv_HPxiSWBc6WaiNOq8g2Ud70JVFhqj5vf9ZeH2-Nv8HwEbePoqml9I6Gx9WSXCyjF6rmcI5YgzzdDs7YhLS4JWekSKwBnfC7r9_i_sS-acLWxWJPpRGjY3rx&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=EIDJtAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73R191vexNT2uJkK9Nrf3tMd_Mn9yqbjJP61hZeHBRs00h8yx96yZAzTsZFoon3M6icPrINpZeghT19-oG4StGAd9oyOcbGbAHfME_9SERvz98ICNTSmsz2nqEZKsW32vAA6jlJ&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=EIDJtAEACAAJ&hl=&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=EIDJtAEACAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=EIDJtAEACAAJ"
  },
  "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "US",
    "viewability": "NO_PAGES",
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=EIDJtAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "NONE",
    "quoteSharingAllowed": false
  }
}
```