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
  /** @xstate-layout N4IgpgJg5mDOIC5QFVZgE4AIBiAbA9gO4B0A9IfugNb4CuALgLQAOuAhgHbEFsQCWHKAGIAysgDC4gKIiRAbQAMAXUShm+WH3p98HVSAAeiAEwAOAKzEAjOasKAzABZHAdgBs9i24A0IAJ4mtsSmFo6mAJxuCi7m4QpuAL4JvqgYOAQk5JQ0DCzsXDz8gkLYAIIAkgAyiipIIOqa2rr6RghmljZ2Tq4eXr4BbQpWxI7GVpHm9m7Gxm6mZkkpaFh4RGQU1HRMrJzc+LyQQuIASlKlACpSxAAKlaUAcjX6DVo6enWt8-2I9i6mI5FTPYFKYFOFzA5jOZFiBUisMutsls8rtCocRFJKlJxOcbndHspnhpXs0Pogvv4TGF-qYbBZgRNzNDkrDluk1llNrkdgV9hB0WdjuIABLEKQADSkQvKGKedReTXeoFaxm6xHCxg14OMCk1nm+bWBCmI0wUk1pViB9nBMLh7MyGxy23yxAAZmw+LhaOgwEJTpUAPKlAAicrUxMVLRMFmstgczncnnMPkpCBsxvBQJcVl+4LNbmZSzSqwdSO5LtIPMYfAgQmupwAauUA8h5IT5RG3lHBtmTTNNarjI5zKYUwNVY57MQFLrHOFQVYoUPC6ziwjOU6UVxK-lqxA9rwBMIxJIZG3auHGl2yQhky5gi5VaPwcnflYDVY5-f4gph1Z3C49gzKYtpsiWiJcs6uw7pwe4HkUwhlFUYb1J2pLKj8wKxl0Ca9MmH6xPe84xPYtizHM7igWuHKOsiPJkFWNbwYcIbBmKkrSrK7aXiSSqGIgVhuFEIwQqMvS6lC5gGhqbjEEB4SOG4c6ODmwIgSydrgRudEVox+5orWUjBuUuL3KUACyUgoQq14YWmLguB+GrGvYwLTA5MyjK4VHwjRZZQduenMbWwaYlIlx4g81loXxrSLo5qaqp406mI4YJgoBESOD59oQZu9EwRwcEGX6UhNlIADq7FSuIMpWdxqFXuh-Fpq4BozIuxBQg5QxuApZqPjlWm0eW0FBSVGLnMg1zVZx9UXo1vHdjYCXjulJoyfET5bYkGlgeuI0BQxu5Me6nrer6-pBqGDU2c1rSucanTxj0SZjgJ5iuMQ5hDkMIK0lMkxDQd-lbsdsFMaQYAGBgADGfBoLARyBlxC13bFAlCcaw6-rMngSUyH4ghmULzvmnguJEwN+ZBYOFXBUMw+g8OI3WjbNq20VNRjaZYyJuPiTMhOpournTkLn6RJa4RONTpa0wVQWM3DCNwPBR6iBI0iyFzS03uE4TfuEVgmwDMTG+9CCG8MUL5nOTiqmCct5TpY0nfuyvM6rsDq8USHVLdMXdgbRsm5aObm4J0k6sQfwuDOI46paqXO9po2Be7ZDQyriPBaIYU4rNtWo0S3PLVCsmCVjrnOCpxhE0J32RGaMy6vOxguKnh100r2de7nZ1ej6pWBiGuuRjedhgtOlozG42aTAyBqmPHckTop8duJ+5id3t1Hy-lumZ57LNq33p+MPy9AergRwBvc2DlMc5nj7ZLU5uMwSeIp3RzjqpgfhrnJFeswyZmAsOpIsvkD6uwzhDD259vbEEQWgS+YBr6emRgGEuHYy6TycMaTUdcsxuTBETQS1ggL23+gpLuoNFbHxQWfJmF80D0G0MUesZUObnlLnrOySknomwNpOee0wPxjCnAWT6BsPCkUiLvKBuU05HXppDJhPsmGMDYRw4Q4gUbzT4RPARaVrDCIUlMdw9cRaCSnOMcYsRNQQktIo1c0CXbp3BkVdRLCkFaJ0RrE80gjKv3uogQRZjxgWLEdYgYdgd7fUtFMHMqVSI2DoQrI+8Cs6+Nzv49BuiSgVADmjION4IlhxEZY8RIsZzfk+qCGY8cGQZMPm7bJJ8kEAAsBD0CEMKcooVQk8xDtOY2psI6xCjrUsYsdPwgmNpTJkss97uJUT3TOkBXjFH0dgwxuD+EtVGMYWOcwhyuC8B4KSqY5j-EnOCNKLhnA71HK02BXi4JbMKeIe+j9n7DO7Mc058wEyXNIgaTK6oHAgjsECGw0w3meLUfufkuB0Ea3EA8aQJSjFvzir8dqZh7ymkmJaWIFgcyItUUFVF6Kdm-Kfi-QOeC7I6l7NMGYGoqEjktpyk55oZYhHnGEGYVKNnZPyewjWRkTIApvLYf4BYpggk+pOTe7VfzDC2taP4iycwrk0iDTJ7TvH7klYU9mlUi51TlXZBVJpJhRFCGq+IGrjbfVJh1X4DhkxioYRK3JYBtEFI1qFLElxbUtWBFOMwcRALxxCHYGIBo7yx2iA5UcYxFnZVWco7u-rTXEFpboxgTDNanhCcyw5D0cxdQiNEb1ibojXLiYpG2yZxg9H-F0P1WTC3FqPKWwNRTkJVuMVG2tsaG0JtpM2j8KljSU1mKq1UOYoS9pNXBHpHA+kDKGWOvFiBU0gM8H1JkHhszzsUk3PqM4+oGxBBu7cGi2bcJbLwg546VRqi1E4nUeoAGJVtrGeOKTAJDFcYammbTn2Bp9iVS1VUJQ1RtQesJCAgJMhGImJcfwlKrRMKRRwIwnC6tsEyeFT6ck5zVhNAuuJkNzUjQ9SS2GPC4dHG1RKSSurWlcHEaISkV5Uc6bnUTQaax3wfoy5jPxyVyUluMLMoJFLtWjeqbMQ5Fl9U8CJjR1H+4SdrLsnBPEv2YWtCaBwFhoWPhfGphwGnFxzn-DpyBbi830IrPpqsuAEZ9IxFiQutwopoZ5vI-49hFPzl+Cp3lrgOhCQo70f8kH9rQfeeJn2vn-OvqbO+2TGHpjEai+4FxtI-gWDU59EjFzwQ2HI7tJRw0vPQR87uPzsA+kmf2WZw9RWIQjAiNaJw88wiOA1dMb66bBIhDnCvA16WYFIv0+ajWXD8uczC92DuSkRhRDIv+CrhsnIqVjubT6VigJKT03B5Bgbg1Sp2QYwru3iOKTNIuI7-4TuJWBJYFeZoRxAmbr63NLXjWwZo5oh7ATihBKkJW0pLKWpvf259sYfwfsEbaD96ctgyYh1BPYW70P7s0ce4U-2r33DvYO19rHlMcdjDMN9Obd4fphF-KTwzPtt27sGb1xa5mMMSVOX8X8gEyKRHaoJErMl+ohCZBYJILIOD4H5PAOoUHCC4vQ4wDuBoDfEZnKbs3pujtPr1zzMYBoPDYeNl4CIMQO45ua0amDvsoDW+7I+D8o5Y5AmAs52wKz3cZc8QZH3N5+zYwhJ4QS4dHz2EJTLcWjjojghllYKjg8LrR7so84IOpgTOF6qRHH4xZJASl6+BSP0mseYh575FBeWp9QNFzrq7QtRATl0DcHHvMvjT5EeNvcV-wESAsEekZogRDDGIt-eHjqWZyj5+-rZKTmfjUnELe-ZLawqnMbTUtJVTzxliTwfEfV-ZLzz6cfiBhwnPmNCsvtid4EQ1MEX9n1rOPhz2v2W1v0LSy0fww1SmsEnCHDsEXBHF1AhUAn21cFgJnFchTiAJX3FVAP00KDHw33QwcmPzShBCmH33iHfFTFHAzEnAiB3gExPxE17ju3Xz63QxNiixNBXgS1njjSJhmC6j+ji1cCcHcx1ywILQZn03vzAHAI4OGAoh4PmD4KoL+B-3-T+AnB+mMCYMYTuy0SvhvjkMUhOTzGcFPzBFsCJkfBIyiX-Eu1kV0I6VW1hxDUEHAOgKgKoVgKhEaX4Jtl-HnB3ksX-CcJwLu353ANBFknnz6jSmkUUkAwGANnCHVDmBnFBH+hUkb3EPWUkKYi+XwLYPC0cynXjX+iTRbUQEAlMJiFUnPQLFeUwLyL7TggHXcIIJt3dXf3GAyn-ihDU2n3nAUjPzjD+DdybyHyRSVh5A4EgCHQpxrHAIXnxwNkwwUiS2Zx1EsDnCUlGEyhliXzWXzVaIKP4BLSYXAK3ksC3kNnmE1D+FEg1ScDkiGC+whBmCiwmNyJOM3QKNcKe2906O7CcBuNSgsAVUvxNg1RjEIlkXIyHDS2XxaL+JRTADRQuMDTkMnxFhxgfHTSE3mDmByKWwkNOP3EiOBJvGcEixll8MphUiAliQEi8mCAhFnU-E-A8HCB51Pi12KJ2x+juQtnGFENJn9xq01DETjW6jD0mJvzplwL5EgHAKixjhDkXCTiFJTyAwNmsDBFmAsGclGF5KQXEz3FVOfy6iiDl2NgVV5ScFSIIUEliFG3GFNNzhyy61VOJygJ3mJhIieXamHFSNp2tDiCZCeUAPD2AMVP0IBN0XAO6lkhc1uLFNiFl3mGnE8EzBXlFLENJJRKh152IEpIFJjziBjRCBtJQPcHwm41GBNEUiiFImBBNkUlVwSCAA */
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
                    'EDIT.NAME': 'editing-exercise',
                    'DELETE.PLAN': 'deleting',
                    'REVIEW.EXERCISE': '/planned-exercise-id',
                    'SETUP.EXERCISE': 'exercise-setting',
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
                'editing-exercise': {},

                'exercise-setting': {
                  on: {
                    EDIT: 'editing-exercise',
                    'REVIEW.EXERCISE': '/planned-exercise-id',
                    DELETE: 'deleting-exercise',
                  },
                },

                'deleting-exercise': {
                  on: {
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
