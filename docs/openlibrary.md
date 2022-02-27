# Open Library API

## Docs

https://openlibrary.org/developers/api

https://openlibrary.org/search/howto

## Usage

#### Search works by title

https://openlibrary.org/search.json?title=Animal%20Farm


#### Search author

https://openlibrary.org/search/authors.json?q=twain

Each document specified listed in "docs" will be of the following format:
```json
{
    "cover_i": 258027,
    "has_fulltext": true,
    "edition_count": 120,
    "title": "The Lord of the Rings",
    "author_name": [
        "J. R. R. Tolkien"
    ],
    "first_publish_year": 1954,
    "key": "OL27448W",
    "ia": [
        "returnofking00tolk_1",
        "lordofrings00tolk_1",
        "lordofrings00tolk_0",
    ],
    "author_key": [
        "OL26320A"
    ],
    "public_scan_b": true
}
```

The fields in the doc are described by Solr schema which can be found here:
https://github.com/internetarchive/openlibrary/blob/master/conf/solr/conf/managed-schema#L136-L216

The schema is not guaranteed to be stable, but most common fields (e.g. title, IA ids, etc) should be safe to depend on.

### Get works by id

https://openlibrary.org/works/OL1168007W.json

### Get edition by id

https://openlibrary.org/books/OL31889064M.json

### Get cover using cover id

https://covers.openlibrary.org/b/id/11261770-L.jpg

## Works Object

https://openlibrary.org/works/OL1168007W.json

```json
{
  "description": "Animal Farm is a brilliant political satire and a powerful and affecting story of revolutions and idealism, power and corruption. 'All animals are equal. But some animals are more equal than others.' Mr Jones of Manor Farm is so lazy and drunken that one day he forgets to feed his livestock. The ensuing rebellion under the leadership of the pigs Napoleon and Snowball leads to the animals taking over the farm. Vowing to eliminate the terrible inequities of the farmyard, the renamed Animal Farm is organised to benefit all who walk on four legs. But as time passes, the ideals of the rebellion are corrupted, then forgotten. And something new and unexpected emerges..",
  "title": "Animal Farm",
  "covers": [
    11261770,
    8600818,
    297300,
    10550889,
    11227698,
    10550735,
    10828845,
    10828846,
    10863035,
    11547586,
    11548512
  ],
  "subjects": [
    "British and irish fiction (fictional works by one author)",
    "political satire",
    "classic",
    "animal drama",
    "Fiction, political",
    "English literature: literary criticism",
    "For National Curriculum Key Stage 4 & GCSE",
    "Fiction, satire",
    "English literature",
    "Comics & graphic novels, literary",
    "Comics & graphic novels, adaptations",
    "Fiction",
    "Literature",
    "Drama (dramatic works by one author)",
    "Animals, fiction",
    "Behavior, fiction",
    "Totalitarianism",
    "Domestic animals",
    "Large type books",
    "Zhong pian xiao shuo",
    "Lectures et morceaux choisis",
    "Français (langue)",
    "Roman",
    "English Political satire",
    "Animales domésticos",
    "Ficción",
    "Totalitarismo",
    "Translations into Chinese",
    "Animals in literature",
    "Children's fiction",
    "Animals",
    "Power (Social sciences)",
    "Fiction, science fiction, general",
    "Orwell, george, 1903-1950",
    "Farms",
    "Livestock",
    "Political corruption",
    "Englischunterricht",
    "Skönlitteratur"
  ],
  "subject_people": [
    "George Orwell (1903-1950)"
  ],
  "key": "/works/OL1168007W",
  "authors": [
    {
      "author": {
        "key": "/authors/OL118077A"
      },
      "type": {
        "key": "/type/author_role"
      }
    }
  ],
  "type": {
    "key": "/type/work"
  },
  "subject_places": [
    "United Kingdom"
  ],
  "first_publish_date": "1997",
  "latest_revision": 43,
  "revision": 43,
  "created": {
    "type": "/type/datetime",
    "value": "2009-12-09T20:37:56.502212"
  },
  "last_modified": {
    "type": "/type/datetime",
    "value": "2022-01-30T06:25:43.939908"
  }
}
```

### Edition Object

https://openlibrary.org/books/OL31889064M.json

```json
{
  "type": {
    "key": "/type/edition"
  },
  "publish_date": "2015",
  "publish_country": "cau",
  "languages": [
    {
      "key": "/languages/eng"
    }
  ],
  "authors": [
    {
      "key": "/authors/OL118077A"
    }
  ],
  "oclc_numbers": [
    "910631518"
  ],
  "lc_classifications": [
    "PR6029.R8 A63 2015"
  ],
  "notes": {
    "type": "/type/text",
    "value": "Satire on dictatorship.\n\n\"For sale in countries with have copyright period of 63 years or less after author's death\"--First page verso."
  },
  "subjects": [
    "Totalitarianism",
    "Fiction",
    "Utopias"
  ],
  "title": "Animal farm",
  "subtitle": "a fairy story",
  "by_statement": "by George Orwell",
  "publishers": [
    "Golden Classics"
  ],
  "publish_places": [
    "San Bernardino, CA"
  ],
  "isbn_13": [
    "9781502492791"
  ],
  "isbn_10": [
    "1502492792"
  ],
  "pagination": "45 pages",
  "number_of_pages": 45,
  "ocaid": "animalfarmfairys0000orwe_c2o1",
  "source_records": [
    "ia:animalfarmfairys0000orwe_c2o1"
  ],
  "full_title": "Animal farm a fairy story",
  "covers": [
    10573422
  ],
  "works": [
    {
      "key": "/works/OL1168007W"
    }
  ],
  "key": "/books/OL31889064M",
  "latest_revision": 1,
  "revision": 1,
  "created": {
    "type": "/type/datetime",
    "value": "2021-01-24T01:23:47.336449"
  },
  "last_modified": {
    "type": "/type/datetime",
    "value": "2021-01-24T01:23:47.336449"
  }
}
```