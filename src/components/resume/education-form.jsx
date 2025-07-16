import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const educationItemSchema = z.object({
  school: z.string().min(1, "School name is required"),
  degree: z.string().min(1, "Degree is required"),
  fieldOfStudy: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  description: z
    .string()
    .max(300, "Description must be less than 300 characters")
    .optional(),
});

const educationFormSchema = z.object({
  educationItems: z.array(educationItemSchema),
});

export function EducationForm({onSub}) {
  const form = useForm({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      educationItems: [
        {
          school: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "educationItems",
  });

  function onSubmit(data) {
    console.log("Education data submitted:", data);
    onSub(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {fields.map((field, index) => (
            <Card key={field.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">
                  Education #{index + 1}
                </CardTitle>
                {fields.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    onClick={() => remove(index)}
                    className="h-8 w-8 text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove education</span>
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name={`educationItems.${index}.school`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School/University</FormLabel>
                      <FormControl>
                        <Input placeholder="Harvard University" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name={`educationItems.${index}.degree`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Degree</FormLabel>
                        <FormControl>
                          <Input placeholder="Bachelor of Science" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`educationItems.${index}.fieldOfStudy`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Field of Study</FormLabel>
                        <FormControl>
                          <Input placeholder="Computer Science" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name={`educationItems.${index}.startDate`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <Input placeholder="Sep 2018" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`educationItems.${index}.endDate`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="May 2022 (or Present)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name={`educationItems.${index}.description`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Relevant coursework, achievements, or activities..."
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() =>
            append({
              school: "",
              degree: "",
              fieldOfStudy: "",
              startDate: "",
              endDate: "",
              description: "",
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Education
        </Button>

        <Button type="submit">Save Education</Button>
      </form>
    </Form>
  );
}
