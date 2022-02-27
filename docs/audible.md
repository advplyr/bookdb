# Audible API

## Docs

https://audible.readthedocs.io/en/latest/misc/external_api.html#documentation

## Usage

#### Query by title

https://api.audible.com/1.0/catalog/products?response_groups=rating,series,contributors,product_desc,media,product_extended_attrs&image_sizes=500,1024,2000&num_results=25&products_sort_by=Relevance&title=Animal%20Farm

#### Get product by ASIN

https://api.audible.com/1.0/catalog/products/B002V5H6F4?response_groups=rating,series,contributors,product_desc,media,product_extended_attrs&image_sizes=500,1024,2000

## Product Object

```json
{
  "product": {
    "asin": "B002V5H6F4",
    "authors": [
      {
        "asin": "B000AQ0KKY",
        "name": "George Orwell"
      }
    ],
    "available_codecs": [
      {
        "enhanced_codec": "LC_128_44100_stereo",
        "format": "Enhanced",
        "is_kindle_enhanced": true,
        "name": "aax_44_128"
      },
      {
        "enhanced_codec": "LC_64_44100_stereo",
        "format": "Enhanced",
        "is_kindle_enhanced": true,
        "name": "aax_44_64"
      },
      {
        "enhanced_codec": "LC_64_22050_stereo",
        "format": "Enhanced",
        "is_kindle_enhanced": true,
        "name": "aax_22_64"
      },
      {
        "enhanced_codec": "format4",
        "format": "Format4",
        "is_kindle_enhanced": false,
        "name": "format4"
      },
      {
        "enhanced_codec": "LC_32_22050_stereo",
        "format": "Enhanced",
        "is_kindle_enhanced": true,
        "name": "aax_22_32"
      },
      {
        "enhanced_codec": "mp44464",
        "format": "Enhanced",
        "is_kindle_enhanced": true,
        "name": "mp4_44_64"
      },
      {
        "enhanced_codec": "mp42264",
        "format": "Enhanced",
        "is_kindle_enhanced": true,
        "name": "mp4_22_64"
      },
      {
        "enhanced_codec": "mp444128",
        "format": "Enhanced",
        "is_kindle_enhanced": true,
        "name": "mp4_44_128"
      },
      {
        "enhanced_codec": "mp42232",
        "format": "Enhanced",
        "is_kindle_enhanced": true,
        "name": "mp4_22_32"
      },
      {
        "enhanced_codec": "aax",
        "format": "Enhanced",
        "is_kindle_enhanced": false,
        "name": "aax"
      }
    ],
    "content_delivery_type": "SinglePartBook",
    "content_type": "Product",
    "editorial_reviews": [
      "<p>\"A wise, compassionate, and illuminating fable of our times....The steadiness and lucidity of Orwell's merciless wit are reminiscent of Anatole France and even of Swift.\" (<i>The New York Times Book Review</i>)</p>"
    ],
    "format_type": "unabridged",
    "has_children": false,
    "is_adult_product": false,
    "is_listenable": true,
    "is_purchasability_suppressed": false,
    "issue_date": "1999-12-15",
    "language": "english",
    "merchandising_summary": "George Orwell's classic satire of the Russian Revolution is an intimate part of our contemporary culture....",
    "narrators": [
      {
        "name": "Ralph Cosham"
      }
    ],
    "product_images": {
      "500": "https://m.media-amazon.com/images/I/51Q-CnFS8pL._SL500_.jpg",
      "1024": "https://m.media-amazon.com/images/I/51Q-CnFS8pL._SL1024_.jpg",
      "2000": "https://m.media-amazon.com/images/I/51Q-CnFS8pL._SL2000_.jpg"
    },
    "publisher_name": "Blackstone Audio, Inc.",
    "publisher_summary": "George Orwell's classic satire of the Russian Revolution is an intimate part of our contemporary culture, quoted so often that we tend to forget who wrote the original words. It is an account of the bold struggle that transforms Mr. Jones' Manor Farm into Animal Farm, a wholly democratic society built on the credo that All Animals Are Created Equal. Out of their cleverness, the pigs Napoleon, Squealer, and Snowball emerge as leaders of the new community in a subtle evolution that bears an insidious familiarity. The climax is the brutal betrayal of the faithful horse Boxer, when totalitarian rule is re-established with the bloodstained postscript to the founding slogan: But Some Animals Are More Equal Than Others.",
    "rating": {
      "num_reviews": 1159,
      "overall_distribution": {
        "average_rating": 4.728886269116154,
        "display_average_rating": "4.7",
        "display_stars": 4.5,
        "num_five_star_ratings": 24214,
        "num_four_star_ratings": 4873,
        "num_one_star_ratings": 168,
        "num_ratings": 30537,
        "num_three_star_ratings": 1112,
        "num_two_star_ratings": 170
      },
      "performance_distribution": {
        "average_rating": 4.757576909913678,
        "display_average_rating": "4.8",
        "display_stars": 5,
        "num_five_star_ratings": 21314,
        "num_four_star_ratings": 3907,
        "num_one_star_ratings": 103,
        "num_ratings": 26297,
        "num_three_star_ratings": 863,
        "num_two_star_ratings": 110
      },
      "story_distribution": {
        "average_rating": 4.74790460225541,
        "display_average_rating": "4.7",
        "display_stars": 4.5,
        "num_five_star_ratings": 21352,
        "num_four_star_ratings": 3628,
        "num_one_star_ratings": 145,
        "num_ratings": 26248,
        "num_three_star_ratings": 960,
        "num_two_star_ratings": 163
      }
    },
    "release_date": "1999-12-15",
    "runtime_length_min": 191,
    "social_media_images": {
      "facebook": "https://m.media-amazon.com/images/I/51Q-CnFS8pL._SL10_UR1600,800_CR200,50,1200,630_CLa%7C1200,630%7C51Q-CnFS8pL.jpg%7C0,0,1200,630+82,82,465,465_PJAdblSocialShare-Gradientoverlay-largeasin-0to70,TopLeft,0,0_PJAdblSocialShare-AudibleLogo-Large,TopLeft,600,270_OU01_ZBLISTENING%20ON,617,216,52,500,AudibleSansMd,30,255,255,255.jpg",
      "twitter": "https://m.media-amazon.com/images/I/51Q-CnFS8pL._SL10_UR1600,800_CR200,50,1024,512_CLa%7C1024,512%7C51Q-CnFS8pL.jpg%7C0,0,1024,512+67,67,376,376_PJAdblSocialShare-Gradientoverlay-twitter-largeasin-0to60,TopLeft,0,0_PJAdblSocialShare-AudibleLogo-Medium,TopLeft,490,223_OU01_ZBLISTENING%20ON,483,152,55,450,AudibleSansMd,32,255,255,255.jpg"
    },
    "thesaurus_subject_keywords": [
      "la_confidential",
      "literature-and-fiction"
    ],
    "title": "Animal Farm"
  },
  "response_groups": [
    "product_desc",
    "always-returned",
    "product_extended_attrs",
    "contributors",
    "series",
    "rating",
    "media"
  ]
}
```