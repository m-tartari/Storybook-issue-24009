// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// without the following import, react-dnd will give the error:
//    `ReferenceError: regeneratorRuntime is not defined`
// this is caused by regenerator-runtime not being applied correctly to Jest
// @see https://stackoverflow.com/questions/42535270
import 'regenerator-runtime/runtime'

// without the following import, jest-dom will give the error:
//    `TypeError: URL.createObjectURL is not a function`
// this is caused by the Web Worker API (specifically Dedicated Worker)
// not existing in Jest
// @see https://github.com/jsdom/jsdom/issues/1721#issuecomment-1079407658
import 'jsdom-worker'

// without the following import, jest-dom will give the error:
//    `ReferenceError: setImmediate is not defined`
// this is because setImmediate has been removed from the jest-dom since v27
// but is required by socket.io-client.
// @see https://github.com/prisma/prisma/issues/8558#issuecomment-1129055580
global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import * as dotenv from 'dotenv'
// // For debug:
// const dotenvResult = dotenv.config({ path: './.env.development' })
// if (typeof dotenvResult.error !== 'undefined') {
//   throw dotenvResult.error
// } else {
//   console.info('added .env variables:', dotenvResult.parsed)
// }
dotenv.config({ path: './.env.development' })
