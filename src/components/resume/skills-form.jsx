"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const skillSchema = z.object({
  name: z.string().min(1, "Skill name is required"),
  level: z.string().optional(),
});

const skillsFormSchema = z.object({
  skills: z.array(skillSchema),
  languages: z.array(skillSchema),
  certifications: z.array(
    z.object({
      name: z.string().min(1, "Certification name is required"),
      issuer: z.string().optional(),
      date: z.string().optional(),
    })
  ),
});

export function SkillsForm({onSub}) {
  const form = useForm({
    resolver: zodResolver(skillsFormSchema),
    defaultValues: {
      skills: [{ name: "", level: "Intermediate" }],
      languages: [{ name: "", level: "Intermediate" }],
      certifications: [{ name: "", issuer: "", date: "" }],
    },
  });

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control: form.control,
    name: "skills",
  });

  const {
    fields: languageFields,
    append: appendLanguage,
    remove: removeLanguage,
  } = useFieldArray({
    control: form.control,
    name: "languages",
  });

  const {
    fields: certFields,
    append: appendCert,
    remove: removeCert,
  } = useFieldArray({
    control: form.control,
    name: "certifications",
  });

  function onSubmit(data) {
    console.log("Skills data submitted:", data);
    onSub(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <h3 className="mb-4 text-lg font-medium">Technical Skills</h3>
          <div className="space-y-4">
            {skillFields.map((field, index) => (
              <div key={field.id} className="flex items-end gap-2">
                <FormField
                  control={form.control}
                  name={`skills.${index}.name`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel
                        className={index !== 0 ? "sr-only" : undefined}
                      >
                        Skill
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="JavaScript, React, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`skills.${index}.level`}
                  render={({ field }) => (
                    <FormItem className="w-[180px]">
                      <FormLabel
                        className={index !== 0 ? "sr-only" : undefined}
                      >
                        Level
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                          <SelectItem value="Expert">Expert</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSkill(index)}
                  disabled={skillFields.length === 1}
                  className="mb-2"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove skill</span>
                </Button>
              </div>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => appendSkill({ name: "", level: "Intermediate" })}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Skill
          </Button>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium">Languages</h3>
          <div className="space-y-4">
            {languageFields.map((field, index) => (
              <div key={field.id} className="flex items-end gap-2">
                <FormField
                  control={form.control}
                  name={`languages.${index}.name`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel
                        className={index !== 0 ? "sr-only" : undefined}
                      >
                        Language
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="English, Spanish, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`languages.${index}.level`}
                  render={({ field }) => (
                    <FormItem className="w-[180px]">
                      <FormLabel
                        className={index !== 0 ? "sr-only" : undefined}
                      >
                        Proficiency
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Basic">Basic</SelectItem>
                          <SelectItem value="Intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="Fluent">Fluent</SelectItem>
                          <SelectItem value="Native">Native</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeLanguage(index)}
                  disabled={languageFields.length === 1}
                  className="mb-2"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove language</span>
                </Button>
              </div>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => appendLanguage({ name: "", level: "Intermediate" })}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Language
          </Button>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium">Certifications</h3>
          <div className="space-y-4">
            {certFields.map((field, index) => (
              <Card key={field.id}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm">
                    Certification #{index + 1}
                  </CardTitle>
                  {certFields.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      type="button"
                      onClick={() => removeCert(index)}
                      className="h-8 w-8 text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove certification</span>
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name={`certifications.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Certification Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="AWS Certified Solutions Architect"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name={`certifications.${index}.issuer`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Issuing Organization</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Amazon Web Services"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`certifications.${index}.date`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date</FormLabel>
                          <FormControl>
                            <Input placeholder="May 2022" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => appendCert({ name: "", issuer: "", date: "" })}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Certification
          </Button>
        </div>

        <Button type="submit">Save Skills & Qualifications</Button>
      </form>
    </Form>
  );
}
