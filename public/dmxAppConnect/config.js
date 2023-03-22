dmx.config({
  "faq": {
    "pricingboxes": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Question"
        },
        {
          "type": "text",
          "name": "Answer"
        },
        {
          "type": "text",
          "name": "Tag"
        }
      ],
      "outputType": "array"
    }
  },
  "faqs": {
    "global": [
      {
        "type": "text",
        "name": "answer"
      },
      {
        "type": "text",
        "name": "question"
      }
    ],
    "pricingboxes": {
      "meta": null,
      "outputType": "text"
    },
    "query": [
      {
        "type": "text",
        "name": "question-tag-type"
      }
    ]
  },
  "ter": {
    "pricingboxes": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Question"
        },
        {
          "type": "text",
          "name": "Answer"
        },
        {
          "type": "text",
          "name": "Tag"
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Question"
        },
        {
          "type": "text",
          "name": "Answer"
        },
        {
          "type": "text",
          "name": "Tag"
        }
      ],
      "outputType": "array"
    }
  },
  "index s ": {
    "query": [
      {
        "type": "object",
        "name": "faq"
      }
    ]
  },
  "preguntaFrequentes": {
    "preguntaFrequentes": [
      {
        "type": "text",
        "name": "typeofquestion"
      }
    ]
  },
  "pfrecuentes": {
    "query": [
      {
        "type": "text",
        "name": "question-type"
      }
    ]
  },
  "indexcuentabancaria": {
    "query": [
      {
        "type": "text",
        "name": "slug"
      }
    ]
  },
  "indexein": {
    "query": [
      {
        "type": "text",
        "name": "questiontypetag"
      }
    ]
  },
  "layoutpagetest": {
    "query": [
      {
        "type": "text",
        "name": "slug"
      }
    ]
  },
  "partialfaq": {
    "query": [
      {
        "type": "text",
        "name": "slug"
      }
    ],
    "pricingboxes": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "question",
          "type": "text"
        },
        {
          "name": "answer",
          "type": "text"
        },
        {
          "name": "tag",
          "type": "text"
        }
      ],
      "outputType": "text"
    },
    "data_view1": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "question",
          "type": "text"
        },
        {
          "name": "answer",
          "type": "text"
        },
        {
          "name": "tag",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "indexsolicitudservicio": {
    "query": [
      {
        "type": "text",
        "name": "pagenav"
      }
    ],
    "sessionStorage": [
      {
        "type": "text",
        "name": "Page"
      }
    ]
  },
  "promobanner": {
    "query": [
      {
        "type": "text",
        "name": "url"
      }
    ]
  },
  "indexhome": {
    "navTabs1_tabs": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "menu"
        },
        {
          "type": "text",
          "name": "heading"
        },
        {
          "type": "text",
          "name": "parragraph"
        },
        {
          "type": "text",
          "name": "img"
        },
        {
          "type": "text",
          "name": "CTA"
        },
        {
          "type": "text",
          "name": "Link"
        },
        {
          "type": "text",
          "name": "home"
        },
        {
          "type": "text",
          "name": "cuenta-bancaria"
        },
        {
          "type": "text",
          "name": "registro-empresa"
        }
      ],
      "outputType": "array"
    }
  },
  "testviews": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Banner img"
        },
        {
          "type": "text",
          "name": "Title"
        },
        {
          "type": "text",
          "name": "Author name"
        },
        {
          "type": "date",
          "name": "Publishing date"
        },
        {
          "type": "text",
          "name": "Copy body"
        },
        {
          "type": "text",
          "name": "Tags"
        },
        {
          "type": "text",
          "name": "Summary"
        },
        {
          "type": "text",
          "name": "slug"
        },
        {
          "type": "boolean",
          "name": "feat"
        }
      ],
      "outputType": "array"
    },
    "var1": {
      "meta": null,
      "outputType": "text"
    },
    "iterator1": {
      "meta": null,
      "outputType": "text"
    },
    "arr1": {
      "meta": null,
      "outputType": "text"
    },
    "repeat2": {
      "meta": null,
      "outputType": "array"
    },
    "global": [
      {
        "type": "array",
        "name": "tagvaria"
      }
    ],
    "vartag": {
      "outputType": "text"
    },
    "arr2": {
      "meta": null,
      "outputType": "text"
    },
    "repeat3": {
      "meta": [],
      "outputType": "object"
    },
    "repeat4": {
      "meta": [
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "city",
          "type": "text"
        },
        {
          "name": "blog_post",
          "type": "array",
          "sub": [
            {
              "name": "blogid",
              "type": "number"
            },
            {
              "name": "title",
              "type": "text"
            },
            {
              "name": "authorid",
              "type": "number"
            }
          ]
        },
        {
          "name": "query",
          "type": "array",
          "sub": [
            {
              "type": "text",
              "name": "title"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "arr3": {
      "meta": null,
      "outputType": "text"
    },
    "repeat6": {
      "meta": [
        {
          "type": "number",
          "name": "blogid"
        },
        {
          "type": "text",
          "name": "title"
        },
        {
          "type": "number",
          "name": "authorid"
        }
      ],
      "outputType": "array"
    },
    "repeat7": {
      "meta": [
        {
          "type": "number",
          "name": "authorsid"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "city"
        },
        {
          "type": "number",
          "name": "blogid"
        },
        {
          "name": "blog_post",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "blogid"
            },
            {
              "type": "text",
              "name": "title"
            },
            {
              "type": "number",
              "name": "authorid"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat8": {
      "meta": [
        {
          "type": "number",
          "name": "blogid"
        },
        {
          "type": "text",
          "name": "title"
        },
        {
          "type": "number",
          "name": "authorid"
        }
      ],
      "outputType": "array"
    }
  },
  "planestripe": {
    "query": [
      {
        "type": "text",
        "name": "article"
      }
    ],
    "data_view1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Banner img"
        },
        {
          "type": "text",
          "name": "Title"
        },
        {
          "type": "text",
          "name": "Author name"
        },
        {
          "type": "date",
          "name": "Publishing date"
        },
        {
          "type": "text",
          "name": "Copy body"
        },
        {
          "type": "text",
          "name": "Tags"
        },
        {
          "type": "text",
          "name": "Summary"
        },
        {
          "type": "text",
          "name": "slug"
        }
      ],
      "outputType": "array"
    },
    "pricingboxes": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Question"
        },
        {
          "type": "text",
          "name": "Answer"
        },
        {
          "type": "text",
          "name": "Tag"
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "name": "$id",
          "type": "number"
        },
        {
          "type": "text",
          "name": "price"
        },
        {
          "type": "text",
          "name": "quantity"
        },
        {
          "type": "text",
          "name": "product_id"
        },
        {
          "type": "text",
          "name": "product_name"
        },
        {
          "type": "text",
          "name": "product_price"
        }
      ],
      "outputType": "array"
    },
    "iterator1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Banner img"
        },
        {
          "type": "text",
          "name": "Title"
        },
        {
          "type": "text",
          "name": "Author name"
        },
        {
          "type": "date",
          "name": "Publishing date"
        },
        {
          "type": "text",
          "name": "Copy body"
        },
        {
          "type": "text",
          "name": "Tags"
        },
        {
          "type": "text",
          "name": "Summary"
        },
        {
          "type": "text",
          "name": "slug"
        }
      ],
      "outputType": "array"
    },
    "repeat2": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Banner img"
        },
        {
          "type": "text",
          "name": "Title"
        },
        {
          "type": "text",
          "name": "Author name"
        },
        {
          "type": "date",
          "name": "Publishing date"
        },
        {
          "type": "text",
          "name": "Copy body"
        },
        {
          "type": "text",
          "name": "Tags"
        },
        {
          "type": "text",
          "name": "Summary"
        },
        {
          "type": "text",
          "name": "slug"
        }
      ],
      "outputType": "array"
    },
    "arr1": {
      "outputType": "array"
    },
    "repeat3": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Banner img"
        },
        {
          "type": "text",
          "name": "Title"
        },
        {
          "type": "text",
          "name": "Author name"
        },
        {
          "type": "date",
          "name": "Publishing date"
        },
        {
          "type": "text",
          "name": "Copy body"
        },
        {
          "type": "text",
          "name": "Tags"
        },
        {
          "type": "text",
          "name": "Summary"
        },
        {
          "type": "text",
          "name": "slug"
        }
      ],
      "outputType": "array"
    },
    "reptags": {
      "meta": null,
      "outputType": "array"
    },
    "repeattags": {
      "meta": null,
      "outputType": "text"
    },
    "blogtags": {
      "meta": null,
      "outputType": "text"
    },
    "tr": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Banner img"
        },
        {
          "type": "text",
          "name": "Title"
        },
        {
          "type": "text",
          "name": "Author name"
        },
        {
          "type": "date",
          "name": "Publishing date"
        },
        {
          "type": "text",
          "name": "Copy body"
        },
        {
          "type": "text",
          "name": "Tags"
        },
        {
          "type": "text",
          "name": "Summary"
        },
        {
          "type": "text",
          "name": "slug"
        }
      ],
      "outputType": "array"
    },
    "repeat4": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Banner img"
        },
        {
          "type": "text",
          "name": "Title"
        },
        {
          "type": "text",
          "name": "Author name"
        },
        {
          "type": "date",
          "name": "Publishing date"
        },
        {
          "type": "text",
          "name": "Copy body"
        },
        {
          "type": "text",
          "name": "Tags"
        },
        {
          "type": "text",
          "name": "Summary"
        },
        {
          "type": "text",
          "name": "slug"
        }
      ],
      "outputType": "array"
    },
    "iterator2": {
      "meta": null,
      "outputType": "text"
    },
    "tagr": {
      "meta": null,
      "outputType": "array"
    },
    "repeat5": {
      "meta": null,
      "outputType": "text"
    },
    "rt": {
      "meta": null,
      "outputType": "array"
    },
    "repeatarticles": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Banner img"
        },
        {
          "type": "text",
          "name": "Title"
        },
        {
          "type": "text",
          "name": "Author name"
        },
        {
          "type": "date",
          "name": "Publishing date"
        },
        {
          "type": "text",
          "name": "Copy body"
        },
        {
          "type": "text",
          "name": "Tags"
        },
        {
          "type": "text",
          "name": "Summary"
        },
        {
          "type": "text",
          "name": "slug"
        }
      ],
      "outputType": "array"
    },
    "data_view2": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "Banner img"
        },
        {
          "type": "text",
          "name": "Title"
        },
        {
          "type": "text",
          "name": "Author name"
        },
        {
          "type": "date",
          "name": "Publishing date"
        },
        {
          "type": "text",
          "name": "Copy body"
        },
        {
          "type": "text",
          "name": "Tags"
        },
        {
          "type": "text",
          "name": "Summary"
        },
        {
          "type": "text",
          "name": "slug"
        }
      ],
      "outputType": "array"
    },
    "dsCart": [
      {
        "type": "text",
        "name": "price"
      },
      {
        "type": "text",
        "name": "quantity"
      },
      {
        "type": "text",
        "name": "product_id"
      },
      {
        "type": "text",
        "name": "product_name"
      },
      {
        "type": "text",
        "name": "product_price"
      }
    ]
  },
  "planesstrip[e": {
    "dsCart": [
      {
        "type": "text",
        "name": "id"
      },
      {
        "type": "text",
        "name": "price"
      },
      {
        "type": "text",
        "name": "product_price"
      },
      {
        "type": "text",
        "name": "product_name"
      },
      {
        "type": "text",
        "name": "product_quatity"
      },
      {
        "type": "text",
        "name": "prodcut_id"
      }
    ],
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "$id",
          "type": "number"
        },
        {
          "type": "text",
          "name": "id"
        },
        {
          "type": "text",
          "name": "price"
        },
        {
          "type": "text",
          "name": "product_price"
        },
        {
          "type": "text",
          "name": "product_name"
        },
        {
          "type": "text",
          "name": "product_quatity"
        },
        {
          "type": "text",
          "name": "prodcut_id"
        }
      ],
      "outputType": "array"
    }
  },
  "indexstripe": {
    "datastore1": [
      {
        "type": "text",
        "name": "price"
      },
      {
        "type": "number",
        "name": "quantity"
      },
      {
        "type": "number",
        "name": "product_id"
      },
      {
        "type": "text",
        "name": "product_name"
      },
      {
        "type": "number",
        "name": "product_price"
      }
    ]
  }
});
