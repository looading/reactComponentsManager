
export const update = (uuid, callback) => {
  return {
    type: 'update',
    data: {
      uuid,
      callback
    }
  }
}

export const updateGlobal = (callback) => {
  return {
    type: 'updateGlobal',
    data: {
      callback
    }
  }
}
