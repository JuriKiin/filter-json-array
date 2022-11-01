# Filter String Arrays

This action takes in an array of strings, and one or multiple strings to compare to. The data then filters out any item that isn't in the matchers.

## Inputs

### data

**Required** The string array of data. Default `[]`.

### matcher

**Required** The values to filter the data by. Default `""`.

### use-match

Whether the output should use the data, or the matcher. (This is useful for getting partial matches, rather than direct matches) Default false.

## Outputs

### `array`

The filtered string array.

## Example usage

```yaml
uses: actions/filter-json-array@v1.7
with:
  data: [\"uiLib",\"Model\",\"doc\"]
  matcher: "Hello"
```