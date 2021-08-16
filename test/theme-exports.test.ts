import * as themes from '../src'
import {
  bugfixes,
} from '../src/bugfixes'

describe('Theme exports', function () {
  test('contains the Bugfixes theme', function () {
    expect(themes.bugfixes).toBe(bugfixes)
  })
})
