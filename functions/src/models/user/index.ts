import { Ctx } from '../../types'
import { getMe } from './get-me'
import { updateMe } from './update-me'

const genUserModel: (ctx: Ctx) => object = (ctx) => ({
  getMe: () => getMe(ctx),
  updateMe: (args: object) => updateMe(ctx, args),
})

export {
  genUserModel,
}
