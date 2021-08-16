import {
  bugfixes,
} from '../src'

describe('Bugfixes theme', function () {
  test('has the correct display name', function () {
    expect(bugfixes.meta.displayName).toBe('Bugfixes (default)')
  })

  test('has the correct global styles', function () {
    expect(bugfixes.global).toMatchSnapshot()
  })

  test('has hte correct primary styles', function () {
    expect(bugfixes.primary).toMatchSnapshot()
  })

  test('has the correct secondary styles', function () {
    expect(bugfixes.secondary).toMatchSnapshot()
  })
})
