
export const update = (componentName, callback) => {
    return {
        type: 'update',
        data: {
          componentName,
          callback
        }
    }
}
