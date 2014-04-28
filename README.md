## webxxb

A web singlepag to check the fund income

```sh
$ [sudo] npm install xxb -g
```

### Usage
Just run `xxb` , you will get the pretty table.
```sh
$ xxb
````

### Configuration

1. Configuration options are set in the ~/.xxb file. If xxb cannot find an user defined configuration file in the home directory, the bundled config.json used instead.

Example configuration:
````
{
    "funds": [
      {
        "code": "000343",
        "bao": "理财通",
        "platform": "微信"
      }
    ]
}
````
2. update asset/app.js

	update the listen url to your local.
