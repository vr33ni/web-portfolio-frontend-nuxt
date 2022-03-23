import { config } from '@vue/test-utils'

/**
 * This file is set for jest as setupFile: https://jestjs.io/docs/en/configuration#setupfiles-array
 * It will be called before each test file.
 */

/**
 * Mocks the translation function
 * $t('layouts.sidebar.orders') will return 'layouts.sidebar.orders'
 */
config!.mocks!.$t = (prop: string) => prop
