# Codegen example project

## Prepare

Load all dependencies

    yarn


## Run model editor
    yarn run serve

Open browser and navigate to http://localhost:3100


## Change json schema

Modify `schema/v1/model.ts` to your needs, then run

    yarn run schema:generate

and replace `model/schema.json` with the result. Finally, run the model editor again and use the new schema.

## Generate code

    yarn build
    yarn run generate

This will load the `gen-test/codegen.json` config and write the output to the `gen-test/out-test/` directory.

## Change templates etc.
Run 

    yarn run build.w

to build and watch for changes in templates and typescript files. Make changes in the `codegen` directory and rerun `yarn run generate`.
