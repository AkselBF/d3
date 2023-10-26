import { reverse, capitalize } from "../strings.mjs";

function testReverse() {
  console.log('Testing reverse function...');
  if (reverse('hello') !== 'olleh') {
    throw new Error('Reverse test failed: "hello" reversed should be "olleh"');
  }
  if (reverse('world') !== 'dlrow') {
    throw new Error('Reverse test failed: "world" reversed should be "dlrow"');
  }
}

function testCapitalize() {
  console.log('Testing capitalize function...');
  if (capitalize('hello') !== 'Hello') {
    throw new Error('Capitalize test failed: "hello" capitalized should be "Hello"');
  }
  if (capitalize('world') !== 'World') {
    throw new Error('Capitalize test failed: "world" capitalized should be "World"');
  }
}

try {
  testReverse();
  testCapitalize();
  console.log('All string tests passed!');
} catch (error) {
  console.error('String test failed:', error.message);
}