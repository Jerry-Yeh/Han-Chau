import { createMachine, assign } from 'xstate';

const loading = {
  entry: 'showLoading',
  on: {
    SUCCESS: 'loaded',
    FAIL: 'failure',
  },
  exit: ['hideLoading'],
};

export const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QFVZgE4AIBiAbA9gO4B0A9IfugNb4CuALgLQAOuAhgHbEFsQCWHKAGIAysgDC4gKIiRAbQAMAXUShm+WH3p98HVSAAeiAEwAOAKzEAjKYDsAFlNWAnAqsBmBedPuANCABPEwA2K2J3B2dbc3crK1tjOPcAX2T-VAwcAhJyShoGFnYuHn5BIWwAQQBJABlFFSQQdU1tXX0jBDNLGwcnVw8vH38gzqsFYjt7Z2DghWNbd1iFFLSQDKw8IjIKajomVk5ufF5IIXEAJSkKgBUpYgAFGoqAOXr9Zq0dPUaO02NhxDuezGYiRZx-WzRZzGcwLVLpNAbbLbPJ7QqHEqnERSGpScTXB5PV7Kd4aT5tH6IP4AhDxUITBzRdzBCwzBT2eFrRFZLa5XYFA7FY4QLFXc7iAASxCkAA0pOKqti3o0Pq1vqAOsYos5QdNTMFnM4xsZFuYaaYFKZiDMZvZ3M5PN5bKZOeseTkdvl9kViAAzNh8XC0dBgISXGoAeQqABFlWoyWr2iYLNZJn03I6hoFEFZZuFIuZgg4tfYFNDXdzNh7UQKfaRBYw+BAhPdLgA1KoR5DyEkqhNfJOdWwKYLEaE2Cy2YLuWGFmlT9ygqaG4ww8zGWYu1Zuqso-new71oqNiBHXgCYRiSQyHsNeMtAeUhCLcY9cxWcyG9wWvzZ2nv19jEcdx5nXOlggrTJdz5L10S4I9OBPM9SmESpajjJp+wpDVAU8VNog-L8fxpXM4msIDnViGdpg3SCkV5T00UFMgGybZDThjaNpTlBUlV7e9yXVQwc0LMJ7S8cd+mBYIaXBWwJisICNyBexIVMLcESg5EYKYutWNPTFmykaMqgJZ4KgAWSkDDVUfHCEHMWFiEcO1VOCddmTiEiZytYIgNcWw6SmKc6PdPdYOYhCOCQwyhGjHEpFuQkXhsrChI6FwFHkxSplUuwIjGWxzVza0ZkCqZCz8mdQugxja0PfT2ObdsqikAB1bj5XERVrP4zCH2w4TaSNbL-LyhZAqy+cvFKmYzGMOZTCmYwau0uqD3gxr-UDYNQ3DKNYz62zBo6F98PfT8HWIv8PzzPzHCy5x7FLA1zFWhiaw2ljjzY0gwAMDAAGM+DQWAzkjPi736wTB1usTXE-RIpI3GlXtBOIR2HLV7Qid7q33ODvsQ37-qBkG4BbFqu1vUkBvSkT6XExHMqsaTZIicIcsSECXHMMs8fC3SGp+08-oB9BgdB5CL1ECRpFkVK6cHUxwXCVx3JHbUYXNEDrX86YgW-cEIO3Ss1s+wmoqQsWyalkoZbQuojrS5XVfEjWDVsaEzT-Z0QUUvnEg-BavFsAWdPqzaRbIUmJfJ2AmtEBL8U63jeqh476dpD95OWHLnpcaF7FksxiHZUjoi1ZZC3D9bLcam246l7agxDMMcQOxWYafI1xhApxv1hP52XnWI9b5+xP1mOItVri3Iob2PJbgYgl-JxgRXoANcDOCNnmwKpzgsrvEyfRSFtBZYsvtYI7TLf4bt5hkpkUlXHPsKw54Jhfo8b5eE7XmgDeYAt6BnBhGSGtNu72RymEOGk4LAKDmA-EYdh5LmA-rfE0BVgQaS5FpD6389K-0ASvUhjA0D0G0GUVsUgOzUxPnZIaGCxJmADgkC0wJnAkSyt0fyMItTOE-KpL+EViHE1FqQgB4tl4UJAdQ4Q4gIbpygafeyLDwhsJhBw9kWoeFAT1hVNwWVhw2FEULKOEiY4yPjqvGxQDKEKNlteYyjCTqIA0f3dhZhdHcL-EaK0Qi-h2AWjgk2ml6L4zEcLKxf9bHkMcQ7aoTsM4uyfJ4rRsIfFcPNCyZy3hYgLTiH8D85jI5E2iiTexK8AAWAh6BCAlFUeKbis4qytO7Pmntvbmh8ORYKH4Zxe3iGUr6Vs2KQE+GUJRECVF9iVk+O0i4XKlgwdCNwhoZI3VLDqHK6kTQsnEhyU2BCokWIqUhSZTjxB7wPkfVpg4gJhCQS86E05eGmBIpPHU91JyFkWtVE5kTBblPGaeEUuAQEy3EC8aQKTVFMIyiNfpT1nQTUKvOGY1gbTLHtKpYEoz67RwhVC6ZtzD7H2dgs+y8wRxjkSOpWE05ZxbNQazYg+slpTCBHMY5ESwoRzGVIymdDOzdgeU+LUXtdQsgNL3bBPsRjRCtLmG0+V9RCMJZFKRicWrtVTt1SB8zoFDXtC4YgGDXrexZOpYuN1ljyUWIbBaKs7TTC1XWHVsVsS4hTrKLqPUJX2TNTqS1QjrXqSWrk0clogQGk8LmJBKx+W1Xnp66pCc4lAKbLvfeFKg1DWkiCSesQnqPWLLJfUExFiTxZFES1YcgUCrrtqjN1jbZgBPOAo1Ak1GFqTdaQKPggLMiiCjfxVafBAkLCraI9giwesPDqhsuAQYNJ9XiAkjwUpUpNR0It+TS2li9hWx+3gy4+A-nqGI+oVpNtTUQpdbaV1rpFfQ8Vu6+37rMFaEtlphzLAOTwjmTq7QuqevaPBO5zaPvgsu48q7YANJmT26GX7EB2nZX5PmzoLAmkZfOSe4RQMxBnDMdci64NtoSfImWtD3002Neh58V7nIjkWIFG+UQ7UjHuhaqdsIFhRB6JR9tTcyHVLkVQ6FyiC2nVYy9DjHhpjceA88mtM57RDrhPemD0SqMdukR2qTTirzSFcZ+xFgIFPsYKlxhwsl2QcqQXEacy1VKf104Q-TYn-52OM4ksojs5PWfNYpuzKmHN-gsIuADWVLR+SUnelNenzlZtqfUxpzS5m9qs8+Is8k2FGw80CIRvTQ01pnQIyEnmUvebS41b1iVkD3ANYGyz7jhpZRReNAqU0-zeGLYaGijgHTMkbXVs5oLGo0ek2UYypkQudA3FaCwDpVJIJmE4IqA3FizT8gsIE+pav4OBYKolVjZtOL1R1f1aclurjyWtoEAGtvxBpN4ewY5VXxCiO5B0yXTvNrTTEypp4rsy3iriW4S3PCLi8fhss7kXA7ZGDEMIw2hE2m9s9UTYLiAkoUYwUhzjzOHVSdS01yxNFOER9Md8URvJ2jHINjcswhH2jx41QnF5ifVPKMk2H1OEffiRwz1HOZsb5JKR4YRYwoNm3q9N6OdSOANKaS0jrWdHLyRci99yByvI3U8CqoCx263LUbasDg+ARTwEaNBogCLOuMHmDSV3i5Mde698moHD79PO6zokVGyzhuQkhMCWERpRP20EIHwcCQSJ8zHMNxyGCLAfgV6ckFX1DLx8lRYSwXsLdCfcoqxAU4vv62hGuDclpRMt12vn+yx6Jjq28c9BI5faR5KCVqXMByu9Z7Oy28RYPm9DQNDSZ6X3lxRHUk9TZb0vNTbGY14UF4J8ZXezddcX3flIKNJ4EdXPo556Y3l+IfScpXVCOx7vgUQRuDmlk0JFhT9WMbyGLfGH1xt5HPOraE9JPEngaM5gPOVPMDYIDo7qvhdmDr5vHD-p0CmCLhaPTijiHl9mCJ+FHlqDXCvjnvAdbF6hvnHhfp1kWJYKEh4Bth-KuPOKuBynzMsPdDCG5h-ggelgnOfrlp1mMHtnnCaBdCyI4CglSH0vdMJjEFHrmJwSQW2l-mAMgQIYuEITOLdEtNSL7KWOAREBdHYKEBNn7qlsrrEjquQpvNvCocyIuM9vaGwkaCyOzHYU4R+OyH8P5PIVUoZv5uJiZpvhQVnE6jTopKLhgYztFn8IYlEOyGWHEOWIQedj-OYW2qrvQMgcOFaBuIWKOm5PPrkmJJEBaI5OCPMM4N4eDvwAoioTviMKzN1nsqzDYIsDRJUQTmAJCjUUEY8llGEOziBHMC0ewfOA4KCCwUgmpIPCdrAUQSkVwYKBwJAHzsZk2MgUBO5JzDCHEPOiBBLg5NCPttsbCOxnyiYUrkKhmsgbENOGxu8jPOpGWDxh4hzLGmYMONOCBDCHjqQScBANcZCJYGGktAlp4JEfUbyhypevaOjnYC4D8W2ulieMgR-CVPoV4KiZGuIbSIBswcYmYAFNHkkaPk+r4S+khiiZ3qEbfLmJhpWuMO5I4CEjsn8BUcSSDgZuJkZv4YFlANcUHHcQmq-Ogc8dnKpM5LmFOMKZaO-uybBogVLOkdcY5NkU4B-HfCYlYLkvJJRPOp9g6LQe0VcrzqQuscyJYJMIaBONXFmGjkCNinNIdo4KEEaZJryesWWBaZ+DOM-p4LfB9roQUvMICXME9O0TzoICseJrUfsYpEaNLokLMA4EssYbMckWPkhEqT0Yst+M5FyhiesoXKypLlWhEEyRaJMECKkKkEAA */
  createMachine(
    {
      id: 'User Flow',
      initial: '/workout-plan',
      predictableActionArguments: true,
      context: {
        isLoading: true,
      },
      states: {
        '/workout-plan': {
          id: 'workoutPlan',
          initial: 'loading',
          states: {
            loading: {
              ...loading,
            },

            loaded: {
              on: {
                'CREATE.PLAN': '/plan-id',
                'SELECT.PLAN': '/plan-id',
                'SEARCH.EXERCISE': '/exercises',
              },
            },

            failure: {
              on: {
                RELOAD: 'loading',
              },
            },

            '/plan-id': {
              initial: 'loading',
              states: {
                loading: { ...loading },

                loaded: {
                  on: {
                    'ADD.EXERCISE': '/exercises',
                    'EDIT.NAME': "editing-exercise",
                    'DELETE.PLAN': 'deleting',
                    'REVIEW.EXERCISE': '/planned-exercise-id',
                    "SETUP.EXERCISE": "exercise-setting"
                  },
                },

                failure: {
                  on: {
                    RELOAD: 'loading',
                  },
                },

                '/exercises': {
                  initial: 'loading',
                  states: {
                    loading: { ...loading },

                    loaded: {
                      on: {
                        'SELECT.EXERCISE': 'exercise-detail',
                      },
                    },

                    failure: {
                      on: {
                        RELOAD: 'loading',
                      },
                    },

                    'exercise-detail': {
                      on: {
                        CONFIRM: 'exercise-setting',
                        CLOSE: 'loaded',
                      },
                    },

                    'exercise-setting': {
                      on: {
                        PREVIOUS: 'exercise-detail',
                        CLOSE: 'loaded',
                        SUCCEED: 'hint',
                        FAIL: 'hint',
                      },
                    },

                    hint: {
                      description: `snack bar`,

                      on: {
                        HIDE: 'loaded',
                      },
                    },
                  },
                  on: {
                    CLOSE: 'loaded',
                    PREVIOUS: 'loaded',
                  },
                },

                editing: {
                  on: {
                    CLOSE: 'loaded',
                    CONFIRM: 'loaded',
                  },
                },

                deleting: {
                  on: {
                    CANCEL: 'loaded',
                    CONFIRM: '#workoutPlan.loaded',
                  },
                },

                '/planned-exercise-id': {},
                "editing-exercise": {},

                "exercise-setting": {
                  on: {
                    EDIT: "editing-exercise",
                    "REVIEW.EXERCISE": "/planned-exercise-id",
                    DELETE: "deleting-exercise"
                  }
                },

                "deleting-exercise": {
                  on: {
                    SUCCEED: "hint",
                    FAIL: "hint"
                  }
                },

                hint: {
                  description: `snack bar`,

                  on: {
                    HIDE: "loaded"
                  }
                }
              },
              on: {
                PREVIOUS: 'loaded',
              },
            },

            '/exercises': {
              states: {
                loaded: {
                  on: {
                    'REVIEW.EXERCISE': '/exercise-id',
                    'SELECT.EXERCISE': 'plan-list',
                  },
                },

                '/exercise-id': {
                  on: {
                    CONFIRM: 'plan-list',
                    CLOSE: 'loaded',
                  },
                },

                'plan-list': {
                  on: {
                    'SELECT.PLAN': 'exercise-setting',
                    PREVIOUS: '/exercise-id',
                    CLOSE: 'loaded',
                  },
                },

                'exercise-setting': {
                  on: {
                    PREVIOUS: 'plan-list',
                    CLOSE: 'loaded',
                    SUCCEED: 'hint',
                    FAIL: 'hint',
                  },
                },

                hint: {
                  tags: ['snack bar'],
                  description: `snack bar`,

                  on: {
                    HIDE: 'loaded',
                  },
                },
              },

              initial: 'loaded',

              on: {
                PREVIOUS: 'loaded',
              },
            },
          },
        },
      },
    },
    {
      actions: {
        showLoading: assign((context) => ({
          ...context,
          isLoading: true,
        })),
        hideLoading: assign({
          isLoading: false,
        }),
      },
    },
  );

export default {};
