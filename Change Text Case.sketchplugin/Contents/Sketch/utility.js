var checkLayerCount = function(selectionCount) {
  var isMoreThanZeroLayersSelected = false

  if (selectionCount > 0) {
    isMoreThanZeroLayersSelected = true
  } else {
    var app = NSApplication.sharedApplication()
    app.displayDialog_withTitle("You must select a layer first.", "Change Title Case")
  }

  return isMoreThanZeroLayersSelected
}
