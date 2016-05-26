export class SortValueConverter {
  toView(list, config) {
    return list.sort(config.callback)
  }

  reverse(x, y) {
    return x < y
  }
}