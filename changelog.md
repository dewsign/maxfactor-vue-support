# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.1.3] - 2018-06-25

### Changed

- `FormMixin` module now has a method to clear the errors for a specific field.

## [1.1.2] - 2018-06-01

### Changed

- `FormMixin` module. Now both sets and checks local and root state form errors to provide better compatibility when working with sub-components.

## [1.1.1] - 2018-03-20

### Added

- `AjaxStore` module. A namespaced Vuex store module that makes use of AJAX to get and update the store's data from the given API end-point.

## [1.1.0] - 2018-02-23

### Added

- `default`, `money` and `percentage` Vue filters

- `formatNumber` helper function

## [1.0.0] - 2018-02-21

### Added

- This CHANGELOG file to hopefully serve as an evolving example of a
  standardized open source project CHANGELOG.
- Added version numbering.
- Cleaned up package dependencies.
