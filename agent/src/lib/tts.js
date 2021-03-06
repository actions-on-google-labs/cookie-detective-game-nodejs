/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const {TextToSpeechClient} = require('@google-cloud/text-to-speech');
const config = require('../../config/tts.json');

const tts = new TextToSpeechClient({
  projectId: config.project_id,
  credentials: config,
});

/**
 * Renders text to audio using the Google Text-to-Speech service
 */
module.exports = {
  /**
   * Synthesizes the given input text to audio using the specified voice and
   * configuration
   * @param {string} input The text to synthesize
   * @param {string} voice The voice to use
   * @param {Object} audioConfig The audio configuration
   * @return {Promise<T>}
   */
  synthesize({input, voice, audioConfig}) {
    return tts
        .synthesizeSpeech({input, voice, audioConfig})
        .then(([data]) => data && data.audioContent)
        .catch(() => null);
  },
};
