import { status } from "../../../constants/statuses";

export const selectReviewModule = (state) => state.review;

export const selectIsReviewLoading = (state) => selectReviewModule.status === status.pending;
export const selectIsReviewLoaded = (state) => selectReviewModule.status === status.success;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviews = (state) =>
  Object.values(selectReviewModule(state).entities);



