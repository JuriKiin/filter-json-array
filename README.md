# Filter JSON Arrays

This Github Action cleanly filters a JSON array of values based on a set of provided matchers. 

## Inputs

### data (**Required**)

The string array of data. Default `[]`.

### matcher (**Required**)

The values to filter the data by. 
Default `""`.

### use-match (**Optional**)

Whether the output should use the data, or the matcher. 

This is useful for getting partial matches, rather than direct matches. Default `false`.

Usage:

> If we get a list of changed file directories, and we want to run matrix jobs, 
but only run for the top level directory. So our changed files might return 
several files in the same module directory, but we can filter to only include 
the module name, allowing us to have that module name as the output to run a 
job using that directory.

## Outputs

### `array`

The filtered string array.

### Example usage

```yaml
uses: JuriKiin/filter-json-array@v1.7
with:
  data: [\"uiLib",\"Model\",\"doc\"]
  matcher: "Lib"
```
**This outputs `["uiLib"]`**

### Example Usage with use-match = true
```yaml
uses: JuriKiin/filter-json-array@v1.7
with:
  data: [\"uiLib",\"Model\",\"doc\"]
  matcher: "Lib"
  use-match: true
```
**This outputs `["Lib"]`**


Support this project with a ⭐

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jurikiin)
