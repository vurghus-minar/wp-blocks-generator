# wp-blocks-generator

Project generator for [WP Block Boilerplate](https://github.com/vurghus-minar/wp-block-boilerplate)

## Installation

```npm install global wp-blocks-generator```

## Getting started

Create a ```wp-block-plugin.json``` file in your development folder.

Run ```wp-block-gen your-block-plugin-name```

Sample ```wp-block-plugin.json```

```json
{
    "plugin": {
        "name": "First block plugin",
        "uri": "https://github.com/vurghus-minar/",
        "description": "First block plugin.",
        "version": "1.0.0",
        "author": "Vurghus Minar",
        "author_uri": "https://github.com/vurghus-minar",
        "license": "MIT",
        "license_uri": "https://opensource.org/licenses/MIT"
    },
    "block": {
        "class_name": "First_Block",
        "slug": "first-block",
        "register_block_type_name": "first-block/my-first-block"
    },
    "package_json": {
        "name": "first-block-plugin",
        "git_username": "vurghus-minar"
    }
}
```